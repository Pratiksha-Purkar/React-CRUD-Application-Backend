const { ObjectId } = require('mongoose').Types;

const employees = [
    { 
        employeeName: "Aarav Kumar",
        dob: "1990-05-15",
        address: "123 Main St",
        mobileNumber: "9876543210",
        email: "aarav.kumar@example.com",
        department: "IT",
        designation: "Software Engineer",
        gender: "Male",
        bloodGroup: "A+"
    },
    {
        employeeName: "Ananya Patel",
        dob: "1988-09-20",
        address: "456 Elm St",
        mobileNumber: "9876543211",
        email: "ananya.patel@example.com",
        department: "HR",
        designation: "HR Manager",
        gender: "Female",
        bloodGroup: "B-"
    },
    {
        employeeName: "Aryan Gupta",
        dob: "1995-03-10",
        address: "789 Oak St",
        mobileNumber: "9876543212",
        email: "aryan.gupta@example.com",
        department: "Sales",
        designation: "Sales Executive",
        gender: "Male",
        bloodGroup: "AB+"
    },
    {
        employeeName: "Aditi Sharma",
        dob: "1992-11-02",
        address: "567 Pine St",
        mobileNumber: "9876543213",
        email: "aditi.sharma@example.com",
        department: "Marketing",
        designation: "Marketing Manager",
        gender: "Female",
        bloodGroup: "B+"
    },
    {
        employeeName: "Advik Singh",
        dob: "1987-07-25",
        address: "890 Maple St",
        mobileNumber: "9876543214",
        email: "advik.singh@example.com",
        department: "Finance",
        designation: "Financial Analyst",
        gender: "Male",
        bloodGroup: "O+"
    },
    {
        employeeName: "Aahana Joshi",
        dob: "1998-12-18",
        address: "123 Birch St",
        mobileNumber: "9876543215",
        email: "aahana.joshi@example.com",
        department: "Operations",
        designation: "Operations Manager",
        gender: "Female",
        bloodGroup: "AB-"
    },
    {
        employeeName: "Arnav Patel",
        dob: "1993-06-30",
        address: "456 Cedar St",
        mobileNumber: "9876543216",
        email: "arnav.patel@example.com",
        department: "IT",
        designation: "System Administrator",
        gender: "Male",
        bloodGroup: "A-"
    },
    {
        employeeName: "Anika Gupta",
        dob: "1991-04-12",
        address: "789 Poplar St",
        mobileNumber: "9876543217",
        email: "anika.gupta@example.com",
        department: "HR",
        designation: "HR Executive",
        gender: "Female",
        bloodGroup: "B-"
    },
    {
        employeeName: "Ayaan Sharma",
        dob: "1994-08-05",
        address: "567 Walnut St",
        mobileNumber: "9876543218",
        email: "ayaan.sharma@example.com",
        department: "Sales",
        designation: "Sales Manager",
        gender: "Male",
        bloodGroup: "O-"
    },
    {
        employeeName: "Anvi Singh",
        dob: "1989-02-28",
        address: "890 Fir St",
        mobileNumber: "9876543219",
        email: "anvi.singh@example.com",
        department: "Marketing",
        designation: "Marketing Executive",
        gender: "Female",
        bloodGroup: "B+"
    }
];

module.exports = {
    employees
};
