package main

import (
	"log"
	"net/http"
	cstm_websocket "rt-chartApp/websocket"
)

func serveWs(pool *cstm_websocket.Pool,w http.ResponseWriter, r *http.Request){
	// log.Println("This is working")
	conn, err := cstm_websocket.Upgrade(w, r)

	if err != nil{
		log.Println(err)
		return
	}
	client := &cstm_websocket.Client{
		Conn: conn,
		Pool: pool,
	}
	pool.Register <- client
	client.Read()
}
func setupRoutes(){
	log.Println("This is working")
	pool := cstm_websocket.NewPool()
	go pool.Start()

	http.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request){
		serveWs(pool, w, r)
	})
}

func main(){
	setupRoutes()
	http.ListenAndServe(":3000",nil)
}
