use std::time::{SystemTime, SystemTimeError, UNIX_EPOCH};

pub fn get_timestamp_in_milliseconds() -> u128 {
    let current_system_time = SystemTime::now();
    current_system_time
        .duration_since(UNIX_EPOCH)
        .map(|duration| duration.as_millis())
        .unwrap_or_else(|err| {
            eprintln!("Failed to get timestamp: {:?}", err);
            0
        })
}
