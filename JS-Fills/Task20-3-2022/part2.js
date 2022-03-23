let grade = window.prompt("Enter Mark");
grade = grade / 10;
switch (parseInt(grade)) {
    case 10:
    case 9:
        document.write("A");
        break;
    case 8:
        document.write("B");
        break;
    case 7:
        document.write("C");
        break;
    case 6:
        document.write("D");
        break;
    case 5:
        document.write("E");
        break;
    default:
        document.write("Fall !");

}