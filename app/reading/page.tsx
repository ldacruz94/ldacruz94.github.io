import books from "../data/books.json"

interface BookCardProps {
  image: string;
  title: string;
  author: string;
  description: string;
  rating: string;
  amazonLink: string;
}

function BookCard({image, title, description, rating, author, amazonLink}: BookCardProps) {
  return (
    <>
    <div className="flex justify-center mb-3">
      <a className="underline" href={amazonLink} target="_blank">
        {title}
        <span className="m-1">&#x2197;</span>
      </a>
    </div>
    <div className="flex justify-center mb-6">
      <span className="flex-row text-center text-sm">by: {author}</span>
    </div>
    <div className="flex flex-col md:flex-row md:items-start">
      <img src={image} alt="Image of Book" className="float-left mr-4 mb-4 md:mb-0 w-32 h-33 object-cover" />
      <div>
        <p>{description}</p>
      </div>
    </div>
    <div className="flex justify-center my-5">
      <span>Rating: {rating}</span>
    </div>
    </>
  );
};


export default function ReadingPage() {
    return (
      <section>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">reading 📚</h1>
        <p className="text-lg">
          I&apos;m a bookworm. I love reading all sorts of genres, but besides non-engineering books, 
          I like to brush up on my knowledge and skills by reading books on data structures and algorithms,
          machine learning, networking, and devops. As well as particular programming languages such as Java,
          Python, C#, C++, JS, etc.
        </p>
        <p className="text-lg pt-5">
          I currently own over 200+ books my Kindle, 
          around 60 paperback/hard cover books and textbooks, 
          and a little over 100 books on another digital platform.
        </p>
        <p className="text-lg pt-5">Here&apos;s some of the books I&apos;ve read:</p>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        {
          books.map((b: BookCardProps, index) => (
            <>
              <BookCard 
              key={index}
              image={b.image}
              title={b.title}
              author={b.author}
              rating={b.rating}
              description={b.description}
              amazonLink={b.amazonLink}
              />
              <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
            </>
        ))}
      </section>
  );
}
  