console.log("Homebrew Surge command");

if (process.argv[2] == "domain") {
    console.log('Deploy website to custom domain')
}

if (process.argv[2] == "users") {
    console.log('add user to account')
}

console.log(process.argv)