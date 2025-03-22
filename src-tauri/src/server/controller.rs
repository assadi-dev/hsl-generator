use actix_web::{get, post, web, HttpResponse, Responder};

#[get("/")]
pub async fn hello() -> impl Responder {
    HttpResponse::Ok().body("Hello world!")
}

#[post("/echo")]
pub async fn echo(req_body: String) -> impl Responder {
    HttpResponse::Ok().body(req_body)
}

pub async fn manual_hello() -> impl Responder {
    HttpResponse::Ok().body("Hello, Tauri with Actix-web!")
}

#[get("/echo/{key}")]
pub async fn greet(key: web::Path<String>) -> impl Responder {
    HttpResponse::Ok().body(format!("Hello {}!", key))
}
