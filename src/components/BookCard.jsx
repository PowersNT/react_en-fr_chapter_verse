import { useLanguage } from "./CustomHook.jsx";

export const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <div className="book-cover">
        <div className="book-spine"></div>
      </div>
      <div className="book-info">
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">{book.author}</p>
        <span className="book-category">{book.category}</span>
        <div className="book-footer">
          <span className="book-price">{book.price}</span>
          <button className="btn-add">+</button>
        </div>
      </div>
    </div>
  );
};

export const FeaturedBooks = () => {
  const { t } = useLanguage();

  const books = [t.books.book1, t.books.book2, t.books.book3, t.books.book4];

  return (
    <section className="featured-books">
      <h2 className="section-title">{t.featured.title}</h2>
      <div className="book-categories">
        <button className="category-tab active">
          {t.featured.newArrivals}
        </button>
        <button className="category-tab">{t.featured.bestsellers}</button>
        <button className="category-tab">{t.featured.staffPicks}</button>
      </div>
      <div className="books-grid">
        {books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </section>
  );
};

export const Services = () => {
  const { t } = useLanguage();

  const services = [
    { icon: "✨", data: t.services.service1 },
    { icon: "✍️", data: t.services.service2 },
    { icon: "☕", data: t.services.service3 },
  ];

  return (
    <section className="services">
      <h2 className="section-title">{t.services.title}</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.data.title}</h3>
            <p className="service-desc">{service.data.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export const Newsletter = () => {
  const { t } = useLanguage();

  return (
    <section className="newsletter">
      <div className="newsletter-content">
        <h2 className="newsletter-title">{t.newsletter.title}</h2>
        <p className="newsletter-subtitle">{t.newsletter.subtitle}</p>
        <form className="newsletter-form">
          <input
            type="email"
            placeholder={t.newsletter.placeholder}
            className="newsletter-input"
          />
          <button type="submit" className="btn btn-primary">
            {t.newsletter.button}
          </button>
        </form>
      </div>
    </section>
  );
};
