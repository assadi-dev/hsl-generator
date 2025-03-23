mod server;
mod services;
use server::command::{is_server_running, start_server, AppState};
use services::mediainfos::meta::MediaInfo;
use tokio::sync::Mutex;
// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
async fn retrieve_infos(files: Vec<String>) -> Vec<MediaInfo> {
    services::mediainfos::meta::get_media_info_collections(files).await
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_dialog::init())
        .manage(AppState {
            server_running: Mutex::new(false),
        })
        .plugin(tauri_plugin_fs::init())
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![
            greet,
            start_server,
            is_server_running,
            retrieve_infos
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
