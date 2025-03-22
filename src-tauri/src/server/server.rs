use actix_web::{web, App, HttpServer};

use crate::server::controller::{echo, greet, hello, manual_hello};

/* async fn hello() -> impl Responder {
    HttpResponse::Ok().body("Hello, Tauri with Actix-web!")
} */

pub async fn run_server() -> std::io::Result<()> {
    let port = 4358;
    let address = format!("127.0.0.1:{}", port);
    let server = HttpServer::new(|| {
        App::new()
            .service(hello)
            .service(echo)
            .service(greet)
            .route("/manual", web::get().to(manual_hello))
    })
    .bind(("127.0.0.1", port))?
    .run();
    println!("🚀 Serveur Actix-web lancé sur http://{}/", address);
    server.await
}
