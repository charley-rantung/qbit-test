/*
    CASE 2
*/

var comments = [
    {
        commentId: 1,
        commentContent: "Hai",
        replies: [
            {
                commentId: 11,
                commentContent: "Hai juga",
                replies: [
                    {
                        commentId: 111,
                        commentContent: "Haai juga hai jugaa",
                    },
                    {
                        commentId: 112,
                        commentContent: "Haai juga hai jugaa",
                    },
                ],
            },
            {
                commentId: 12,
                commentContent: "Hai juga",
                replies: [
                    {
                        commentId: 121,
                        commentContent: "Haai juga hai jugaa",
                    },
                ],
            },
        ],
    },
    {
        commentId: 2,
        commentContent: "Halooo",
        replies: [],
    },
];
// Menggunakan metode rekursif

const totalComments = (komentar) => {
    if (!komentar) return;
    let total = 0;
    total += komentar.length;
    for (let i = 0; i < komentar.length; i++) {
        if (komentar[i].replies) {
            // rekursif disini
            total += totalComments(komentar[i].replies);
        }
    }
    return total;
};

console.log("Total komentar: ", totalComments(comments));
