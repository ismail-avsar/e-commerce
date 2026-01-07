const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/;

const passwords = [
    "Admin123!",       // Should pass
    "admin123!",       // Fail: no uppercase
    "Admin123",        // Fail: no special char
    "Admin123.",       // Fail: . not in special char set?
    "Admin123#",       // Fail: # not in special char set?
    "Password123!",    // Should pass
    "!Password123",    // Should pass
];

passwords.forEach(p => {
    console.log(`'${p}': ${regex.test(p)}`);
});
