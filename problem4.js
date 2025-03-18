
// Problem 04 : Make A Great Password
// ⚠️ Function Name Must be password()

// কলি মুদ্দি ন সাহে ব নতুন ফ োন কি নে বি ভি ন্ন ওয়ে বসাইটে ভি জি ট করে ন এবং বি ভি ন্ন এপ্লি কে শনে একাউন্ট ক্রি য়ে ট
// করে ন । কি ন্তু তি নি পাসওয়ার্ড মনে রাখতে পারে ন না । তি নি এমন একটি ফাংশন চান, যে খানে তার ইনফরমে শন
// এবং ওয়ে বসাইট নে ম দি লে সে টা কলি মুদ্দি ন সাহে ব কে একটি মনে রাখার মত ো পাসওয়ার্ড জে নারে ট করে দি তে
// পারবে ।
// তার জন্য password() নামে একটা ফাংশন লি খতে হবে ।

// Input :
// ফাংশন টি একটা object ইনপুট হি সে বে নি বে । যে খানে শুধুতি ন টি প্র োপার্টি থাকবে ।
// { name: "kolimuddin" , birthYear: 1999 , siteName: "google" }
// ⚠️ অব্জে ক্ট এ প্র োপার্টি গুল োর নাম একদম সে ইম হতে হবে ।

// Password-Structure :
// Website Name
// (প্রথম অক্ষর বড় হাতে র হবে )

// # ইউজার নে ম @ birthYear

// Output:
// ফাংশন টি উপরে র স্ট্রাকচার অনযু ায়ী একটা স্ট্রি ং আউটপুট আকারে রি টার্ন করবে ।
// Google#kolimuddin@1999

// Challenge 📢: যদি ক োন একটা প্র োপার্টি মি সি ং থাকে অথবা যদি birthYear 4 ডি জি টে র না হয় ফাংশন টি
// রি টার্ন করবে একটি স্ট্রি ং যার ভ্যালুহবে invalid

// SAMPLE INPUT SAMPLE OUTPUT (string)
// { name: "kolimuddin" , birthYear: 1999 , siteName: "google" } Google#kolimuddin@1999
// { name: "rahat", birthYear: 2002, siteName: "Facebook" } Facebook#rahat@2002
// { name: "toky", birthYear: 200, siteName: "Facebook" } invalid
// { name: "maisha", birthYear: 2002 } invalid
// { name: "maisha", birthYear: 2002 } invalid


// /*function signature/sample */
// function password(obj) {
//     //write your code here
//     }









function password(obj) {
    // Check if all required properties exist and birthYear is a 4-digit number
    if (!obj.name || !obj.birthYear || !obj.siteName || obj.birthYear.toString().length !== 4) {
        return "invalid";
    }

    // Capitalize the first letter of siteName
    let formattedSiteName = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);

    // Generate the password
    return `${formattedSiteName}#${obj.name}@${obj.birthYear}`;
}

// ✅ Test Cases:
console.log(password({ name: "kolimuddin", birthYear: 1999, siteName: "google" })); // Google#kolimuddin@1999
console.log(password({ name: "rahat", birthYear: 2002, siteName: "Facebook" })); // Facebook#rahat@2002
console.log(password({ name: "toky", birthYear: 200, siteName: "Facebook" })); // invalid
console.log(password({ name: "maisha", birthYear: 2002 })); // invalid
console.log(password({ birthYear: 2002, siteName: "Facebook" })); // invalid