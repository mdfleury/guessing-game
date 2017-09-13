<?php
/**
 * @file guess.php
 *
 * @author Matt Fleury <mdfleury@gmail.com>
*/

echo "Guess the number!" . PHP_EOL;

$secret_number = rand(1, 100);
$guesses = 0;

echo "The secret number is: $secret_number" . PHP_EOL;

while (TRUE) {
    $guesses++;

    echo "Please input your guess." . PHP_EOL;

    $guess = (int)fgets(STDIN);

    if ($guess === 0) {
        continue;
    }

    echo "You guessed: $guess" . PHP_EOL;

    switch ($guess <=> $secret_number) {
        case -1:
            echo 'too small' . PHP_EOL;
            continue;
        case 1:
            echo 'too big' . PHP_EOL;
            continue;
        case 0:
            echo "You win! $guesses guesses!" . PHP_EOL;
            break 2;
    }
}
