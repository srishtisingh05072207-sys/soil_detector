/* =====================================================
   TEERATECH
   COMPLETE JAVASCRIPT
===================================================== */


/* =====================================================
   GLOBAL DATA
===================================================== */

let analysisData = {

    soilTest: null,

    image: null,

    questionnaire: null

};



/* =====================================================
   SCROLL TO ANALYSIS
===================================================== */

function scrollToAnalysis() {

    document
        .getElementById("analyze")
        .scrollIntoView({
            behavior: "smooth"
        });

}



/* =====================================================
   SHOW INPUT AREA
===================================================== */

function showInputArea() {

    const area =
        document.getElementById("inputArea");

    area.style.display = "block";

    area.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}



/* =====================================================
   1. SOIL TEST
===================================================== */

function openSoilTest() {

    const area =
        document.getElementById("inputArea");


    area.innerHTML = `

        <div class="input-box">

            <h2>
                🧪 Soil Test Information
            </h2>

            <p>
                Enter the values from your laboratory
                soil-test report.
            </p>


            <label>
                Soil pH
            </label>

            <input
                type="number"
                id="ph"
                min="0"
                max="14"
                step="0.1"
                placeholder="Example: 6.5"
            >


            <label>
                Nitrogen (N)
            </label>

            <input
                type="number"
                id="nitrogen"
                placeholder="Enter value"
            >


            <label>
                Phosphorus (P)
            </label>

            <input
                type="number"
                id="phosphorus"
                placeholder="Enter value"
            >


            <label>
                Potassium (K)
            </label>

            <input
                type="number"
                id="potassium"
                placeholder="Enter value"
            >


            <label>
                Organic Carbon
            </label>

            <input
                type="number"
                id="organicCarbon"
                step="0.1"
                placeholder="Optional"
            >


            <button
                class="primary-button"
                onclick="saveSoilTest()"
            >

                Analyze Soil →

            </button>

        </div>

    `;


    showInputArea();

}



/* =====================================================
   SAVE SOIL TEST
===================================================== */

function saveSoilTest() {

    const ph =
        parseFloat(
            document.getElementById("ph").value
        );


    const nitrogen =
        parseFloat(
            document.getElementById("nitrogen").value
        );


    const phosphorus =
        parseFloat(
            document.getElementById("phosphorus").value
        );


    const potassium =
        parseFloat(
            document.getElementById("potassium").value
        );


    const organicCarbon =
        parseFloat(
            document.getElementById("organicCarbon").value
        ) || null;


    if (
        isNaN(ph) ||
        isNaN(nitrogen) ||
        isNaN(phosphorus) ||
        isNaN(potassium)
    ) {

        alert(
            "Please enter pH, Nitrogen, Phosphorus and Potassium."
        );

        return;

    }


    if (ph < 0 || ph > 14) {

        alert(
            "pH must be between 0 and 14."
        );

        return;

    }


    analysisData.soilTest = {

        ph,

        nitrogen,

        phosphorus,

        potassium,

        organicCarbon

    };


    generateCombinedReport();

}



/* =====================================================
   2. IMAGE ANALYSIS
===================================================== */

function openImageAnalysis() {

    const area =
        document.getElementById("inputArea");


    area.innerHTML = `

        <div class="input-box">

            <h2>
                📷 Scan Your Soil
            </h2>

            <p>
                Upload a clear photograph of your soil.
            </p>


            <input
                type="file"
                id="soilImage"
                accept="image/*"
                onchange="previewSoilImage(event)"
            >


            <img
                id="imagePreview"
                class="image-preview"
                alt="Soil preview"
            >


            <button
                class="primary-button"
                onclick="analyzeSoilImage()"
            >

                Analyze Image →

            </button>


            <p class="warning">

                ⚠️ Image analysis is an estimate.
                A photograph cannot directly measure
                pH or NPK. For higher confidence,
                provide soil-test information.

            </p>

        </div>

    `;


    showInputArea();

}



/* =====================================================
   IMAGE PREVIEW
===================================================== */

function previewSoilImage(event) {

    const file =
        event.target.files[0];


    if (!file) {
        return;
    }


    const preview =
        document.getElementById(
            "imagePreview"
        );


    preview.src =
        URL.createObjectURL(file);


    preview.style.display =
        "block";


    analysisData.image = file;

}



/* =====================================================
   IMAGE ANALYSIS
===================================================== */

function analyzeSoilImage() {

    if (!analysisData.image) {

        alert(
            "Please upload a soil image first."
        );

        return;

    }


    /*
       DEMO ML RESULT

       Later this section will send
       the image to our Python ML API.

       Example:

       image
          ↓
       API
          ↓
       ML Model
          ↓
       prediction
    */


    analysisData.image = {

        detected: true,

        soilType: "Loamy",

        estimatedFertility: "Moderate",

        confidence: 52

    };


    generateCombinedReport();

}



/* =====================================================
   3. QUESTIONNAIRE
===================================================== */

function openQuestionnaire() {

    const area =
        document.getElementById("inputArea");


    area.innerHTML = `

        <div class="input-box">

            <h2>
                📝 Quick Soil Assessment
            </h2>

            <p>
                You can get a preliminary assessment
                without a soil-test report.
            </p>


            <label>
                What does your soil feel like?
            </label>

            <select id="texture">

                <option value="">
                    Select
                </option>

                <option value="sandy">
                    Sandy
                </option>

                <option value="clay">
                    Clay-like
                </option>

                <option value="loamy">
                    Loamy
                </option>

                <option value="unknown">
                    Don't know
                </option>

            </select>


            <label>
                How quickly does water drain?
            </label>

            <select id="drainage">

                <option value="">
                    Select
                </option>

                <option value="fast">
                    Very quickly
                </option>

                <option value="medium">
                    Moderate
                </option>

                <option value="slow">
                    Slowly
                </option>

                <option value="unknown">
                    Don't know
                </option>

            </select>


            <label>
                How often is irrigation available?
            </label>

            <select id="irrigation">

                <option value="">
                    Select
                </option>

                <option value="regular">
                    Regular
                </option>

                <option value="occasional">
                    Occasional
                </option>

                <option value="rain">
                    Rain dependent
                </option>

            </select>


            <label>
                What was previously grown here?
            </label>

            <input
                type="text"
                id="previousCrop"
                placeholder="Example: Wheat"
            >


            <button
                class="primary-button"
                onclick="saveQuestionnaire()"
            >

                Get Assessment →

            </button>

        </div>

    `;


    showInputArea();

}



/* =====================================================
   SAVE QUESTIONNAIRE
===================================================== */

function saveQuestionnaire() {

    const texture =
        document.getElementById(
            "texture"
        ).value;


    const drainage =
        document.getElementById(
            "drainage"
        ).value;


    const irrigation =
        document.getElementById(
            "irrigation"
        ).value;


    const previousCrop =
        document.getElementById(
            "previousCrop"
        ).value;


    if (
        texture === "" ||
        drainage === "" ||
        irrigation === ""
    ) {

        alert(
            "Please answer the required questions."
        );

        return;

    }


    analysisData.questionnaire = {

        texture,

        drainage,

        irrigation,

        previousCrop

    };


    generateCombinedReport();

}



/* =====================================================
   CALCULATE SOIL HEALTH
===================================================== */

function calculateSoilHealth(
    ph,
    nitrogen,
    phosphorus,
    potassium
) {

    let score = 0;


    /* pH */

    if (ph >= 6 && ph <= 7.5) {

        score += 25;

    }

    else if (ph >= 5.5 && ph <= 8) {

        score += 18;

    }

    else {

        score += 10;

    }


    /* Nitrogen */

    if (nitrogen >= 40) {

        score += 25;

    }

    else if (nitrogen >= 20) {

        score += 18;

    }

    else {

        score += 10;

    }


    /* Phosphorus */

    if (phosphorus >= 25) {

        score += 25;

    }

    else if (phosphorus >= 15) {

        score += 18;

    }

    else {

        score += 10;

    }


    /* Potassium */

    if (potassium >= 150) {

        score += 25;

    }

    else if (potassium >= 100) {

        score += 18;

    }

    else {

        score += 10;

    }


    return score;

}



/* =====================================================
   FERTILITY
===================================================== */

function fertilityLevel(score) {

    if (score >= 75) {

        return "High";

    }


    if (score >= 50) {

        return "Moderate";

    }


    return "Low";

}



/* =====================================================
   PH STATUS
===================================================== */

function phStatus(ph) {

    if (ph < 5.5) {

        return "Acidic";

    }


    if (ph <= 7.5) {

        return "Suitable";

    }


    return "Alkaline";

}



/* =====================================================
   CROP RECOMMENDATION
===================================================== */

function recommendCrops(
    ph,
    nitrogen,
    phosphorus,
    potassium
) {

    let crops = [];


    /* WHEAT */

    let wheat = 50;


    if (ph >= 6 && ph <= 7.5) {

        wheat += 25;

    }


    if (nitrogen >= 30) {

        wheat += 10;

    }


    if (phosphorus >= 15) {

        wheat += 7;

    }


    crops.push({

        name: "Wheat",

        score: Math.min(
            wheat,
            99
        )

    });



    /* MUSTARD */

    let mustard = 50;


    if (ph >= 6 && ph <= 7.5) {

        mustard += 20;

    }


    if (potassium >= 100) {

        mustard += 10;

    }


    crops.push({

        name: "Mustard",

        score: Math.min(
            mustard,
            99
        )

    });



    /* POTATO */

    let potato = 50;


    if (ph >= 5.5 && ph <= 7) {

        potato += 20;

    }


    if (nitrogen >= 25) {

        potato += 10;

    }


    crops.push({

        name: "Potato",

        score: Math.min(
            potato,
            99
        )

    });



    /* MILLET */

    let millet = 55;


    if (ph >= 5.5 && ph <= 7.5) {

        millet += 18;

    }


    crops.push({

        name: "Millet",

        score: Math.min(
            millet,
            99
        )

    });


    crops.sort(
        (a, b) =>
            b.score - a.score
    );


    return crops;

}



/* =====================================================
   IMPROVEMENT SUGGESTIONS
===================================================== */

function improvementSuggestions(
    ph,
    nitrogen,
    phosphorus,
    potassium
) {

    let suggestions = [];


    if (nitrogen < 20) {

        suggestions.push(
            "Nitrogen appears low. Consider improving organic matter and following soil-test-based nutrient management."
        );

    }


    if (phosphorus < 15) {

        suggestions.push(
            "Phosphorus appears low. Consider appropriate phosphorus management based on soil testing and crop requirements."
        );

    }


    if (potassium < 100) {

        suggestions.push(
            "Potassium appears low. Consider potassium management based on your soil test and selected crop."
        );

    }


    if (ph < 5.5) {

        suggestions.push(
            "Soil appears acidic. Confirm the pH with a reliable soil test before choosing corrective treatment."
        );

    }


    if (ph > 7.5) {

        suggestions.push(
            "Soil appears alkaline. Maintain organic matter and use crop-specific soil-management practices."
        );

    }


    if (suggestions.length === 0) {

        suggestions.push(
            "Your measured parameters appear reasonably balanced. Continue regular soil testing and maintain soil organic matter."
        );

    }


    return suggestions;

}



/* =====================================================
   GENERATE REPORT
===================================================== */

function generateCombinedReport() {

    let ph;

    let nitrogen;

    let phosphorus;

    let potassium;

    let soilType = "Estimated";

    let confidence = 50;


    /* ==========================================
       IF SOIL TEST EXISTS
    ========================================== */

    if (analysisData.soilTest) {

        ph =
            analysisData.soilTest.ph;

        nitrogen =
            analysisData.soilTest.nitrogen;

        phosphorus =
            analysisData.soilTest.phosphorus;

        potassium =
            analysisData.soilTest.potassium;

        confidence = 90;

    }


    /* ==========================================
       IF ONLY IMAGE
    ========================================== */

    else if (analysisData.image) {

        ph = 6.5;

        nitrogen = 25;

        phosphorus = 20;

        potassium = 130;

        soilType =
            analysisData.image.soilType;

        confidence = 52;

    }


    /* ==========================================
       IF QUESTIONNAIRE
    ========================================== */

    else if (analysisData.questionnaire) {

        ph = 6.5;

        nitrogen = 23;

        phosphorus = 18;

        potassium = 115;

        soilType =
            getQuestionnaireSoilType();

        confidence = 50;

    }


    /* ==========================================
       COMBINATION
    ========================================== */

    if (
        analysisData.soilTest &&
        analysisData.image
    ) {

        confidence = 94;

    }


    if (
        analysisData.soilTest &&
        analysisData.questionnaire
    ) {

        confidence = 95;

    }


    if (
        analysisData.image &&
        analysisData.questionnaire &&
        !analysisData.soilTest
    ) {

        confidence = 70;

    }


    if (
        analysisData.soilTest &&
        analysisData.image &&
        analysisData.questionnaire
    ) {

        confidence = 97;

    }


    const score =
        calculateSoilHealth(
            ph,
            nitrogen,
            phosphorus,
            potassium
        );


    const fertility =
        fertilityLevel(score);


    const pHResult =
        phStatus(ph);


    const crops =
        recommendCrops(
            ph,
            nitrogen,
            phosphorus,
            potassium
        );


    const suggestions =
        improvementSuggestions(
            ph,
            nitrogen,
            phosphorus,
            potassium
        );


    displayReport({

        score,

        fertility,

        ph,

        pHResult,

        nitrogen,

        phosphorus,

        potassium,

        soilType,

        crops,

        suggestions,

        confidence

    });

}



/* =====================================================
   QUESTIONNAIRE SOIL TYPE
===================================================== */

function getQuestionnaireSoilType() {

    if (!analysisData.questionnaire) {

        return "Estimated";

    }


    const texture =
        analysisData.questionnaire.texture;


    if (texture === "sandy") {

        return "Sandy";

    }


    if (texture === "clay") {

        return "Clay-like";

    }


    if (texture === "loamy") {

        return "Loamy";

    }


    return "Estimated";

}



/* =====================================================
   DISPLAY REPORT
===================================================== */

function displayReport(data) {

    const report =
        document.getElementById(
            "soilReport"
        );


    const methodCount =
        countMethods();


    report.innerHTML = `

        <div class="report-header">

            <p>
                TEERATECH SOIL REPORT
            </p>


            <h2>
                Your Soil Health
            </h2>


            <div class="health-score">

                ${data.score}

                <span>
                    /100
                </span>

            </div>


            <strong>
                ${data.fertility} Fertility
            </strong>

        </div>



        <div class="confidence">

            <strong>
                Analysis Confidence:
            </strong>

            ${getConfidenceText(
                data.confidence
            )}


            <div class="confidence-bar">

                <div
                    style="width:${data.confidence}%">
                </div>

            </div>


            <p style="
                margin-top:8px;
                color:#737c75;
                font-size:11px;
            ">

                Based on ${methodCount}
                analysis method(s).

            </p>

        </div>



        <div class="report-grid">


            <div class="report-item">

                <span>
                    Soil Type
                </span>

                <strong>
                    ${data.soilType}
                </strong>

            </div>


            <div class="report-item">

                <span>
                    pH
                </span>

                <strong>
                    ${data.ph}
                    — ${data.pHResult}
                </strong>

            </div>


            <div class="report-item">

                <span>
                    Nitrogen
                </span>

                <strong>
                    ${data.nitrogen}
                </strong>

            </div>


            <div class="report-item">

                <span>
                    Phosphorus
                </span>

                <strong>
                    ${data.phosphorus}
                </strong>

            </div>


            <div class="report-item">

                <span>
                    Potassium
                </span>

                <strong>
                    ${data.potassium}
                </strong>

            </div>


            <div class="report-item">

                <span>
                    Input Sources
                </span>

                <strong>
                    ${methodCount} method(s)
                </strong>

            </div>

        </div>



        <div class="crop-results">

            <h3>
                🌾 Best Crop Matches
            </h3>


            ${data.crops
                .slice(0, 3)
                .map(
                    (crop, index) => `

                    <div class="crop-result">

                        <strong>

                            ${index + 1}.
                            ${crop.name}

                        </strong>


                        <span>

                            ${crop.score}%

                        </span>

                    </div>

                `
                )
                .join("")}

        </div>



        <div class="improvement">

            <h3>
                🧪 Soil Improvement Suggestions
            </h3>


            <ul>

                ${data.suggestions
                    .map(
                        item => `
                        
                        <li>
                            ${item}
                        </li>
                        
                        `
                    )
                    .join("")}

            </ul>

        </div>

    `;


    report.style.display =
        "block";


    report.scrollIntoView({

        behavior: "smooth",

        block: "start"

    });

}



/* =====================================================
   COUNT METHODS
===================================================== */

function countMethods() {

    let count = 0;


    if (analysisData.soilTest) {

        count++;

    }


    if (analysisData.image) {

        count++;

    }


    if (analysisData.questionnaire) {

        count++;

    }


    return count;

}



/* =====================================================
   CONFIDENCE TEXT
===================================================== */

function getConfidenceText(value) {

    if (value >= 90) {

        return "High";

    }


    if (value >= 70) {

        return "Moderate-High";

    }


    if (value >= 50) {

        return "Preliminary";

    }


    return "Low";

}



/* =====================================================
   CONSOLE MESSAGE
===================================================== */

console.log(
    "🌱 TeeraTech loaded successfully!"
);
```