package main

import (
	"time"
	"encoding/json"
	"fmt"
	"net/http"
)

func counter() {
	for i := 0; i < 10; i++ {
		fmt.Println(i)
		time.Sleep(time.Second)
	}
}

func sum(a int, b int) int {
	return a + b
}

func sumAndBool(a int, b int) (int, bool) {
	if a > 10 {
		return a + b, false
	}
	return a + b, true
}

func home(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Hello, World!"))
}

func courseRoute(w http.ResponseWriter, r *http.Request) {
	course := Course {
		Name: "Go",
		Description: "A programming language",
		Price: 0,
	}
	json.NewEncoder(w).Encode(course)
}


type Course struct {
	Name 				string `json:"course"`
	Description string `json:"description"`
	Price 			int 	 `json:"price"`
}

func (c Course) GetFullInfo() string {
	return fmt.Sprintf("%s - %s - %d", c.Name, c.Description, c.Price)
}

func worker(workerID int, data chan int) {
	for x := range data {
		fmt.Printf("Worker %d: %d\n", workerID, x)
		time.Sleep(time.Second)
	}
}

func main() {
	// var a string
	// a = "Hello, World!"
	a := "Hello, World!"
	result, status := sumAndBool(1, 2)

	course := Course {
		Name: "Go",
		Description: "A programming language",
		Price: 0,
	}
	course.Price = 100

	println(result, status)
	println(a)
	println(sum(1, 2))
	fmt.Println("Hello, World", 10)
	fmt.Println(course.Name)
	fmt.Println(course.GetFullInfo())

	go counter() // go routine T1
	go counter() // go routine T2
	counter() // Thread 0

	http.HandleFunc("/", home)
	http.HandleFunc("/course", courseRoute)
	http.ListenAndServe(":8080", nil)

	channel := make(chan string)
	go func()	{
		channel <- "Hello, World!"
	}()
	fmt.Println(<-channel)

	channelWithWorker := make(chan int)
	go worker(1, channelWithWorker) //T3
	go worker(2, channelWithWorker) //T4
	for i := 0; i < 10000; i++ {
		go worker(i, channelWithWorker) //Ti
	}
	for i := 0; i < 100000; i++ {
		channelWithWorker <- i
	}
}