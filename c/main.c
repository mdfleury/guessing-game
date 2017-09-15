#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main()
{
    printf( "Guess the number!\n" );
    srand(time(NULL));

    int guess;
    int guesses = 0;
    int secret = (rand() % 100) + 1;
    int result;

    printf("The secret number is %d\n", secret);

    while (1 == 1)
    {
        guesses++;
        printf("Input your guess:\n");
        result = scanf("%d", &guess);

        if (result == EOF)
        {
            continue;
        }

        if (result == 0) {
            while (fgetc(stdin) != '\n') // Read until a newline is found
            ;
        }

        if (guess > secret)
        {
            printf("Too high\n");
        }
        else if (guess < secret)
        {
            printf("Too low\n");
        }
        else if (guess == secret)
        {
            printf("You win! Guesses: %d\n", guesses);
            return 0;
        }
    }

    return 0;
}
