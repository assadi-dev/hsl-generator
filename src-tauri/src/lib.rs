mod server;

use server::command::{is_server_running, start_server, AppState};
use tokio::sync::Mutex;
// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .manage(AppState {
            server_running: Mutex::new(false),
        })
        .plugin(tauri_plugin_fs::init())
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![
            greet,
            start_server,
            is_server_running
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
