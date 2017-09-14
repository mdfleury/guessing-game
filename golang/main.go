package main

import (
    "fmt"
    "math/rand"
    "time"
    "bufio"
    "os"
    "strconv"
    "strings"
)

func main() {
    fmt.Println("Guess the number!")

    rand.Seed(time.Now().Unix())
    guesses := 0
    secret := rand.Int63n(100)

    fmt.Println("The secret number is", secret)
    reader := bufio.NewReader(os.Stdin)

    for {
        guesses++

        fmt.Print("Input your guess: ")

        input, _ := reader.ReadString('\n')
        trimmed := strings.TrimSpace(input)
        guess, _ := strconv.ParseInt(trimmed, 0, 64)

        switch {
            case secret > guess:
                fmt.Println("Too low")
            case secret < guess:
                fmt.Println("Too high")
            case secret == guess:
                fmt.Println("You win! Guesses:", guesses)
                os.Exit(0)
        }
    }
}
