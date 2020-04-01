# Odd Positive Integer Average UI

This is a two part project which extends upon the [server](https://github.com/CS-BTurner/odd-positive-integer-average) you created for finding the average of odd positive numbers.

## CLI Utility

The first part of this project will involve writing a basic command line utility which can be used to communicate with the server that you have set up.

It is expected that this program should be runnable by executing the bash command

```bash
> avg <host> [<integer array>]
```

This should then send a http(s) request to your odd positive average server. It is expected that this tool will be able to handle both 200 and 400 status code responses.

#### Example Interactions

```bash
> avg http://localhost:8080 [12, -27, 40, 0, 3, 0, 9, 81]
Average of all odd positive integers: 31
```

```bash
> avg http://localhost:8080 [-1, -2, -3]
No odd positive integers were supplied.
```

---

## React / Typescript App

The second part of this project will be using introducing you to React and expanding upon your knowledge of Typescript. It will involve making a GUI to communicate with the odd positive average server.

The application should:

- Send http(s) requests to the server, as was done in the CLI.
- Store all previous requests and related responses from the current session. Allowing users to see what they have sent previously.

Remember that React is used to create **reuseable** components. Think about how to break down a larger component into smaller pieces.

---

## Note

- Lots of the application logic can be shared between these two applications.
- Try and understand the Webpack bundling process used in the React/Typescript application.
