const data = [
    {
    
        "id":125,
        "title":"Kim Jiyoung, Born 1982",
        "author":"Cho, Nam-joo",
        "description":"In a small, tidy apartment on the outskirts of the frenzied metropolis of Seoul, KimJiyoung-a millennial 'everywoman'-spends her days caring for her infant daughter. Her husband, however, worries over a strange symptom that has recently appeared: Jiyoung has begun to impersonate the voices of other women-dead and alive, both known and unknown to her. Truly, flawlessly, completely, she became that very person. As she plunges deeper into this psychosis, Jiyoung's concerned husband sends her to a psychiatrist, who listens to her narrate her own life story-from her birth to a family who expected a son, to elementary school teachers who policed girls' outfits, to male coworkers who installed hidden cameras in women's restrooms and posted the photos online. But can her doctor cure her, or even discover what truly ails her?",
        "ebook":true,
        "fisicBook":true,
        "price":20,
        "stock":100,
        "img":"https://i.ibb.co/NmrW64r/D-NQ-NP-825469-MLA42620517705-072020-O.webp"
    },
    {
        "id":56,
        "title":"Almond",
        "author":"Sohn, Won-Pyung",
        "description":"Yunjae was born with a brain condition called Alexithymia that makes it hard for him to feel emotions like fear or anger. He does not have friends—the two almond-shaped neurons located deep in his brain have seen to that—but his devoted mother and grandmother aren’t fazed by his condition. Their little home above his mother’s used bookstore is decorated with colorful post-it notes that remind him when to smile, when to say 'thank you,'' and when to laugh. Yunjae grows up content, even happy, with his small family in this quiet, peaceful space.       Then on Christmas Eve—Yunjae’s sixteenth birthday—everything changes. A shocking act of random violence shatters his world, leaving him alone and on his own. Struggling to cope with his loss, Yunjae retreats into silent isolation, until troubled teenager Gon arrives at his school and begins to bully Yunjae. Against all odds, tormentor and victim learn they have more in common than they realized. Gon is stumped by Yunjae’s impassive calm, while Yunjae thinks if he gets to know the hotheaded Gon, he might learn how to experience true feelings. Drawn by curiosity, the two strike up a surprising friendship. As Yunjae begins to open his life to new people—including a girl at school—something slowly changes inside him. And when Gon suddenly finds his life in danger, it is Yunjae who will step outside of every comfort zone he has created to perhaps become a most unlikely hero. ",
        "ebook":false,
        "fisicBook":true,
        "price":25,
        "stock":90,
        "img":"https://i.ibb.co/N1pPkWb/D-NQ-NP-929007-MLA50296220770-062022-O.webp"
    },
    {
        "id":10,
        "title":"The Metamorphosis",
        "author":"Kafka, Franz",
        "description":"The Metamorphosis begins almost comically. A man wakes up to find he has turned into an insect. But the claustrophobic, dirty room and the increasingly distressed narrator soon turn this into a tale of slow horror. Most horrifying of all is his family's reaction to his metamorphosis and their final solution to the problem.",
        "ebook":true,
        "fisicBook":false,
        "price":15,
        "stock":120,
        "img":"https://i.ibb.co/sg7nfpV/D-NQ-NP-812258-MLA46099858299-052021-O.webp"
    },
    {
        "id":150,
        "title":"Human Acts",
        "author":"Han, Kang",
        "description":"In the midst of a violent student uprising in South Korea, a young boy named Dong-ho is shockingly killed.The story of this tragic episode unfolds in a sequence of interconnected chapters as the victims and the bereaved encounter suppression, denial, and the echoing agony of the massacre. From Dong-ho's best friend who meets his own fateful end; to an editor struggling against censorship; to a prisoner and a factory worker, each suffering from traumatic memories; and to Dong-ho's own grief-stricken mother; and through their collective heartbreak and acts of hope is the tale of a brutalized people in search of a voice.",
        "ebook":true,
        "fisicBook":true,
        "price":25,
        "stock":100,
        "img":"https://i.ibb.co/vJh1dv5/D-NQ-NP-823857-MLA44983041831-022021-O.webp"
    },
    {
        "id":86,
        "title":"The Midnight Library",
        "author":"Matt, Haig",
        "description":"Somewhere out beyond the edge of the universe there is a library that contains an infinite number of books, each one the story of another reality. One tells the story of your life as it is, along with another book for the other life you could have lived if you had made a different choice at any point in your life. While we all wonder how our lives might have been, what if you had the chance to go to the library and see for yourself? Would any of these other lives truly be better?",
        "ebook":false,
        "fisicBook":true,
        "price":30,
        "stock":150,
        "img":"https://i.ibb.co/ydPhnR1/e9862b0054f46d1ea55d82e87ea9321a.jpg"
    },
    {
        "id":90,
        "title":"Highly Sensitive People in an Insensitive World",
        "author":"Ilse, Sand",
        "description":"In today's fast-paced, increasingly public society, we are expected to be resilient, to have the energy to manage a packed work schedule, social calendar, and a large network of friends, both online and offline, day and night. If you find yourself struggling to live up to, or even enjoy, these non-stop social expectations, then this book is for you.       Written for highly sensitive people, the book explains the characteristics of being highly sensitive and how to overcome common difficulties, such as low self-esteem and the exhausting effects of socialising. Ilse Sand also encourages you to explore and appreciate the advantages of high sensitivity, including your aptitude for depth, intensity and presence, and suggests activities to calm and inspire.",
        "ebook":true,
        "fisicBook":false,
        "price":30,
        "stock":50,
        "img":"https://i.ibb.co/khtpdn1/Hochsensibel-copy.jpg"
    }
]
const okay = true;
const customFetch=()=>{
    return new Promise((result,reject)=>{
        setTimeout(()=>{
            if(okay){
                result(data)
            }
            else{
                reject()
            }
        }, 2000)
    })
}
export default customFetch;