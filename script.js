function checkPlagiarism() {
    var text1 = document.getElementById('text1').value;
    var text2 = document.getElementById('text2').value;

    var similarityScore = calculateSimilarity(text1, text2);

    var resultDiv = document.getElementById('result');
    var scoreSpan = document.getElementById('score');
    scoreSpan.textContent = similarityScore + '%';
    resultDiv.style.display = 'block';
}

function calculateSimilarity(text1, text2) {
    var minLength = Math.min(text1.length, text2.length);
    var commonLength = 0;

    for (var i = 0; i < minLength; i++) {
        if (text1[i] === text2[i]) {
            commonLength++;
        }
    }

    var similarityScore = (commonLength / minLength) * 100;

    return similarityScore.toFixed(2);
}
