use crate::services::date_format;
use std::path::Path;

#[derive(serde::Serialize, serde::Deserialize)]
pub struct MediaInfo {
    id: u128,
    filename: String,
    path: String,
    duration: f64,
    size: u64,
    height: i64,
    width: i64,
}

pub async fn get_media_info_collections(paths_collections: Vec<String>) -> Vec<MediaInfo> {
    let mut resolve_paths: Vec<MediaInfo> = Vec::new();
    if !paths_collections.is_empty() {
        for path in paths_collections {
            let result: Result<MediaInfo, String> = get_media_info(path.to_string()).await;
            if let Ok(media_info) = result {
                resolve_paths.push(media_info);
            } else {
                eprintln!(
                    "Erreur lors de la récupération des informations média pour {}:",
                    path
                );
            }
        }
    }
    resolve_paths
}

pub async fn get_media_info(file_path: String) -> Result<MediaInfo, String> {
    let original_path = file_path.clone();
    match ffprobe::ffprobe(&original_path) {
        Ok(info) => {
            let milliseconds_timestamp = date_format::get_timestamp_in_milliseconds();

            let duration = info
                .format
                .duration
                .as_ref()
                .and_then(|d| d.parse::<f64>().ok())
                .unwrap_or(0.0);
            let filename = get_file_name_from_path(original_path);

            let media_info = MediaInfo {
                id: milliseconds_timestamp,
                filename,
                path: file_path,
                duration,
                size: info.format.size.parse::<u64>().unwrap_or(0),
                height: info.streams[0].height.unwrap_or(0),
                width: info.streams[0].width.unwrap_or(0),
            };
            Ok(media_info)
        }
        Err(err) => {
            eprintln!("Could not analyze file with ffprobe: {:?}", err);
            Err(format!("Error analyzing file: {}", err))
        }
    }
}

fn get_file_name_from_path(file_path: String) -> String {
    let path = Path::new(&file_path);
    // Récupérer le nom de fichier (sans l'extension du chemin)
    match path.file_name() {
        Some(name) => name.to_string_lossy().to_string(),
        None => String::new(), // Retourne une chaîne vide si le nom de fichier est inexistant
    }
}
