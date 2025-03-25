use serde::{Deserialize, Serialize};
use serde_json::Value; // Pour (de)sérialiser JSON
use std::error::Error;

#[derive(Debug, Deserialize)]
pub struct InputFileInfo {
    pub id: u128,
    pub input: String,
    pub filename: String,
    pub duration: f64,
}
