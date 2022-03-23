let day = window.prompt("enter number of day");
switch (parseInt(day)) {
    case 1:
        document.write("Sunday");
        break;
    case 2:
        document.write("Monday");
        break;
    case 3:
        document.write("Tuesday");
        break;
    case 4:

        document.write("Wednesday");
        break;
    case 5:
        document.write("Thursday");
        break;
    case 6:
        document.write("Friday");
        break;
    case 7:
        document.write("Saturday");
        break;
    default:
        document.write("wrong enter, this is not a day");

}