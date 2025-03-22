use super::server;
use tauri::State;
use tokio::sync::{oneshot, Mutex};

#[tauri::command]
pub async fn start_server(state: State<'_, AppState>) -> Result<(), String> {
    let mut server_running = state.server_running.lock().await;
    if *server_running {
        return Err("Le serveur est déjà en cours d'exécution".to_string());
    }

    *server_running = true;

    tauri::async_runtime::spawn(async {
        if let Err(e) = server::run_server().await {
            println!("Erreur serveur: {:?}", e);
        }
    });

    Ok(())
}

#[tauri::command]
pub async fn is_server_running(state: State<'_, AppState>) -> Result<bool, String> {
    Ok(*state.server_running.lock().await)
}

pub struct AppState {
    pub server_running: Mutex<bool>,
}
