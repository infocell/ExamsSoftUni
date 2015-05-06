<!--<!DOCTYPE html>-->
<!--<html>-->
<!--<head>-->
<!--    <title>CV Generator</title>-->
<!--    <style>-->
<!--        fieldset#personalInformation input[type="text"],-->
<!--        fieldset#personalInformation input[type="email"],-->
<!--        fieldset#personalInformation select,-->
<!--        fieldset#personalInformation label[for="birthDate"],-->
<!--        fieldset#personalInformation input[type="date"],-->
<!--        fieldset#personalInformation input[type="tel"],-->
<!--        fieldset#computerSkills label,-->
<!--        fieldset#otherSkills label[for="lang"],-->
<!--        fieldset#otherSkills label#driverLicense {-->
<!--            display: block;-->
<!--        }-->
<!--    </style>-->
<!--</head>-->
<!--<body>-->
<!--<form method="post" action="05-simple-table.php">-->
<!--    <fieldset id="personalInformation">-->
<!--        <legend>Personal Information</legend>-->
<!--        <input type="text" name="firstName" placeholder="First Name"/>-->
<!--        <input type="text" name="lastName" placeholder="Last Name"/>-->
<!--        <input type="email" name="email" placeholder="Email"/>-->
<!--        <input type="tel" name="tel" placeholder="Phone Number"/>-->
<!--        <label for="female">Female</label>-->
<!--        <input type="radio" name="sex" id="female" value="female"/>-->
<!--        <label for="male">Male</label>-->
<!--        <input type="radio" name="sex" id="male" value="male"/>-->
<!--        <label for="birthDate">Birth Date</label>-->
<!--        <input type="date" name="birthDate" id="birthDate"/>-->
<!--        <label for="nationality">Nationality</label>-->
<!--        <select name="nationality" id="nationality">-->
<!--            <option value="Bulgarian">Bulgarian</option>-->
<!--        </select>-->
<!--    </fieldset>-->
<!---->
<!--    <fieldset id="lastWorkPosition">-->
<!--        <legend>Last Work Position</legend>-->
<!---->
<!--        <div><label for="companyName">Company Name</label>-->
<!--            <input type="text" name="companyName" id="companyName"/>-->
<!--        </div>-->
<!--        <div>-->
<!--            <label for="fromDate">From</label>-->
<!--            <input type="date" name="fromDate" id="fromDate"/></div>-->
<!--        <div>-->
<!--            <label for="toDate">To</label>-->
<!--            <input type="date" name="toDate" id="toDate"/>-->
<!--        </div>-->
<!--    </fieldset>-->
<!---->
<!--    <fieldset id="computerSkills">-->
<!--        <legend>Computer Skills</legend>-->
<!--        <label for="programmingL">Programming Languages</label>-->
<!--        <input type="text" name="programmingLName" id="programmingL"/>-->
<!--        <select name="programmingLLevel" id="pll">-->
<!--            <option value="beginner">Beginner</option>-->
<!--            <option value="programmer">Programmer</option>-->
<!--            <option value="ninja">Ninja</option>-->
<!--        </select>-->
<!---->
<!--        <div>-->
<!--            <input type="submit" name="removeLanguage" value="Remove Language"/>-->
<!--            <input type="submit" name="addLanguage" value="Add Language"/>-->
<!--        </div>-->
<!--    </fieldset>-->
<!---->
<!--    <fieldset id="otherSkills">-->
<!--        <legend>Other Skills</legend>-->
<!--        <label for="lang">Languages</label>-->
<!--        <input type="text" name="lang" id="lang"/>-->
<!---->
<!--        <select name="comprehension" id="comprehension">-->
<!--            <option>-Comprehension-</option>-->
<!--            <option value="beginner">beginner</option>-->
<!--            <option value="intermediate">intermediate</option>-->
<!--            <option value="advanced">advanced</option>-->
<!--        </select>-->
<!---->
<!--        <select id="reading">-->
<!--            <option>-Reading-</option>-->
<!--            <option value="beginner">beginner</option>-->
<!--            <option value="intermediate">intermediate</option>-->
<!--            <option value="advanced">advanced</option>-->
<!--        </select>-->
<!---->
<!--        <select name="writing" id="writing">-->
<!--            <option>-Writing-</option>-->
<!--            <option value="beginner">beginner</option>-->
<!--            <option value="intermediate">intermediate</option>-->
<!--            <option value="advanced">advanced</option>-->
<!--        </select>-->
<!---->
<!--        <div>-->
<!--            <input type="submit" name="removeLanguage" value="Remove Language"/>-->
<!--            <input type="submit" name="addLanguage" value="Add Language"/>-->
<!--        </div>-->
<!--        <label id="driverLicense">Driver's License</label>-->
<!--        <label for="B">B</label><input type="checkbox" name="driversLicense[]" value="B" id="B"/>-->
<!--        <label for="A">A</label><input type="checkbox" name="driversLicense[]" value="A" id="A"/>-->
<!--        <label for="C">C</label><input type="checkbox" name="driversLicense[]" value="C" id="C"/>-->
<!---->
<!--    </fieldset>-->
<!---->
<!--    <input type="submit" name="generateCV" value="Generate CV"/>-->
<!--</form>-->
<!---->
<!---->
<!---->
<!---->
<?php
////if(isset($_POST['tags']) && $_POST['tags'] != '') {
////    $arrOfTags = preg_split('/,\s+/', $_POST["tags"]);
////    foreach ($arrOfTags as $key => $elem) {
////        echo "<div>$key : " . htmlentities($elem) . "</div>";
////    }
////}
////?>
<!--</body>-->
<!--</html>-->