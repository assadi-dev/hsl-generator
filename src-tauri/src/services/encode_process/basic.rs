use std::time::Duration;

use tokio::time::sleep;

pub async fn truncate_video(input: String) -> Result<(), Box<dyn std::error::Error>> {
    println!("truncate_video a bien été appelé avec : {}", input);
    sleep(Duration::from_secs(1)).await;
    Ok(())
}
