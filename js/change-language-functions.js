var languageContent = {
    greek: {
      languageBtn: "EL",
      mainTitle: "Έκδοση άδειας γάμου αλλοδαπού/ής κατοίκου Ελλάδας",
      pageTitle: "Έκδοση άδειας γάμου αλλοδαπού/ής κατοίκου Ελλάδας",
      infoTitle: "Πληροφορίες για την έκδοση άδειας γάμου αλλοδαπού/ής κατοίκου Ελλάδας",
      subTitle1: "Αυτό το ερωτηματολόγιο μπορεί να σας βοηθήσει να βρείτε εάν μπορείτε να παντρευτείτε στην Ελλάδα εάν είστε αλλοδαπός κάτοικος.",
      subTitle2: "H συμπλήρωση του ερωτηματολογίου δεν απαιτεί παραπάνω από 10 λεπτά.",
      subTitle3: "Δεν θα αποθηκεύσουμε ούτε θα μοιραστούμε τις απαντήσεις σας.",
      backButton: "Πίσω",
      nextQuestion: "Επόμενη ερώτηση",
      biggerCursor: "Μεγαλύτερος Δρομέας",
      bigFontSize: "Μεγάλο Κείμενο",
      readAloud: "Ανάγνωση",
      changeContrast: "Αντίθεση",
      readingMask: "Μάσκα Ανάγνωσης",
      footerText: "Αυτό το έργο δημιουργήθηκε για τις ανάγκες της εργασίας κατά τη διάρκεια του μαθήματος Συστήματα Ηλεκτρονικής Διακυβέρνησης. Βασίστηκε στην πτυχιακή εργασία των 2 φοιτητριών της Εφαρμοσμένης Πληροφορικής: Αμπατζίδου Ελισάβετ και Δασύρα Ευμορφία Ελπίδα",
      startBtn:"Ας ξεκινήσουμε",
      chooseAnswer: "Επιλέξτε την απάντησή σας",
      oneAnswer: "Μπορείτε να επιλέξετε μόνο μία επιλογή.",
      errorAn: "Λάθος:",
      choose: "Πρέπει να επιλέξετε μια απάντηση",
    },
    english: {
      languageBtn: "EN",
      mainTitle: "Issuance of a marriage license for a foreign resident of Greece",
      pageTitle: "Issuance of a marriage license for a foreign resident of Greece",
      infoTitle: "Information on issuing a marriage license for a foreign resident of Greece",
      subTitle1: "This questionnaire can help you find out if you can get married in Greece if you are a foreign resident.",
      subTitle2: "Completing the questionnaire should not take more than 10 minutes.",
      subTitle3: "We will neither store nor share your answers.",
      backButton: "Βack",
      nextQuestion: "Next Question",
      biggerCursor: "Bigger Cursor",
      bigFontSize:" Big Font Size",
      readAloud: "Read Aloud",
      changeContrast:" Change Contrast",
      readingMask:" Reading Mask",
      footerText: "This project was created for the needs of the work during the course E-Government Systems. It was based on the thesis of 2 Applied Informatics students: Ambatzidou Elisavet and Dassira Evmorfia Elpida. ",
      startBtn:"Let's start",
      chooseAnswer: "Choose your answer",
      oneAnswer: "You can choose only one option.",
      errorAn: "Error:",
      choose: "You must choose one option",
    }
};
  
// Retrieve the selected language from localStorage or set default to "greek"
var currentLanguage = localStorage.getItem("preferredLanguage") || "greek";

function toggleLanguage() {
    currentLanguage = currentLanguage === "greek" ? "english" : "greek";
    localStorage.setItem("preferredLanguage", currentLanguage);
    updateContent();
}

function updateContent() {
    var components = document.querySelectorAll(".language-component");
     
    components.forEach(function (component) {
        var componentName = component.dataset.component;
        component.textContent = languageContent[currentLanguage][componentName];
    });
}

// Initialize the content based on the selected language
updateContent();