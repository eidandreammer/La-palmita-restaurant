type CategoryId =
  | 'breakfast'
  | 'sandwiches'
  | 'lunch'
  | 'classics'
  | 'sides'
  | 'drinks'

type MenuItem = {
  id: string
  category: CategoryId
  title: string
  description: string
  price: number
  image: string
  imageAlt: string
  imagePosition?: string
}

const restaurant = {
  name: 'La Palmita Restaurant 2',
  tagline: 'Cuban retro color, Caribbean comfort, and neighborhood-sized hospitality.',
  address: '438 Boulevard, Hasbrouck Heights, NJ 07604',
  phoneDisplay: '(201) 288-5454',
  phoneHref: 'tel:+12012885454',
  mapsUrl:
    'https://www.google.com/maps/place/La+Palmita+Restaurant+2/@40.869434,-74.070322,17z/',
  serviceArea: 'Serving Hasbrouck Heights, Wood-Ridge, and nearby Bergen County neighborhoods.',
}

const navigation = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#specialties', label: 'Specialties' },
  { href: '#menu', label: 'Menu' },
  { href: '#visit', label: 'Visit' },
  { href: '#contact', label: 'Contact' },
]

const hours = [
  ['Monday', '8:00 AM - 8:00 PM'],
  ['Tuesday', '8:00 AM - 8:00 PM'],
  ['Wednesday', '8:00 AM - 8:00 PM'],
  ['Thursday', '8:00 AM - 8:00 PM'],
  ['Friday', '8:00 AM - 8:00 PM'],
  ['Saturday', '8:00 AM - 8:00 PM'],
  ['Sunday', '9:00 AM - 6:00 PM'],
]

const categories: { id: CategoryId; label: string; description: string; anchor: string }[] = [
  {
    id: 'breakfast',
    label: 'Breakfast',
    description: 'Morning plates built around plantains, eggs, and fast comfort.',
    anchor: 'menu-breakfast',
  },
  {
    id: 'sandwiches',
    label: 'Sandwiches',
    description: 'Pressed, toasted, and made for grab-and-go lunch breaks.',
    anchor: 'menu-sandwiches',
  },
  {
    id: 'lunch',
    label: 'Lunch Plates',
    description: 'Rice, beans, salad, and the kind of mains regulars order on repeat.',
    anchor: 'menu-lunch',
  },
  {
    id: 'classics',
    label: 'House Classics',
    description: 'Larger dinner-style dishes with mofongo, steak, seafood, and fried favorites.',
    anchor: 'menu-classics',
  },
  {
    id: 'sides',
    label: 'Sides',
    description: 'Extra bites and add-ons to round out the table.',
    anchor: 'menu-sides',
  },
  {
    id: 'drinks',
    label: 'Drinks',
    description: 'Cold tropical refreshers, sodas, and bottled basics.',
    anchor: 'menu-drinks',
  },
]

const menuItems: MenuItem[] = [
  {
    id: 'mangu',
    category: 'breakfast',
    title: 'Mangú',
    description:
      'Mashed green plantains with salami, eggs, and cheese for a full, hearty breakfast.',
    price: 12,
    image: '/images/hero-bowl.jpg',
    imageAlt: 'Mangú breakfast bowl with eggs and plantains.',
    imagePosition: 'center',
  },
  {
    id: 'cassava-breakfast',
    category: 'breakfast',
    title: 'Cassava Breakfast',
    description: 'Boiled yuca with eggs, salami, and cheese for a classic island breakfast.',
    price: 12,
    image: '/images/soup.jpg',
    imageAlt: 'Cassava breakfast plate with a rustic Caribbean presentation.',
    imagePosition: 'center 58%',
  },
  {
    id: 'egg-sandwich',
    category: 'sandwiches',
    title: 'Egg & Cheese Sandwich',
    description: 'Soft roll with egg and melted cheese for a quick counter-service stop.',
    price: 7,
    image: '/images/interior-lounge.jpg',
    imageAlt: 'Retro counter setting representing a fast breakfast sandwich order.',
    imagePosition: 'center 44%',
  },
  {
    id: 'cuban-sandwich',
    category: 'sandwiches',
    title: 'Cuban Sandwich',
    description: 'Roast pork, ham, pickles, and honey mustard pressed hot and served crisp.',
    price: 14,
    image: '/images/hero-plate.jpg',
    imageAlt: 'Pressed Cuban sandwich served in a colorful retro dining mood.',
    imagePosition: 'center 52%',
  },
  {
    id: 'stewed-pork-ribs',
    category: 'lunch',
    title: 'Stewed Pork Ribs',
    description: 'Slow-braised ribs with peppers and tomato, served with rice, beans, and salad.',
    price: 13,
    image: '/images/hero-plate.jpg',
    imageAlt: 'Stewed pork ribs plate with rice and sides.',
    imagePosition: 'center 56%',
  },
  {
    id: 'stewed-chicken',
    category: 'lunch',
    title: 'Stewed Chicken',
    description: 'Home-style pollo guisado with rice, beans, and a fresh salad on the side.',
    price: 12,
    image: '/images/plantains-rice.jpg',
    imageAlt: 'Stewed chicken plate with rice and plantains.',
    imagePosition: 'center 58%',
  },
  {
    id: 'pernil',
    category: 'lunch',
    title: 'Roasted Pork Shoulder / Pernil',
    description: 'Citrus-marinated pork shoulder with rice, beans, and salad.',
    price: 13.99,
    image: '/images/hero-plate.jpg',
    imageAlt: 'Roasted pork shoulder plate arranged with colorful sides.',
    imagePosition: 'center 48%',
  },
  {
    id: 'roasted-chicken',
    category: 'lunch',
    title: 'Roasted Chicken',
    description: 'Juicy roasted chicken with rice, beans, and salad for an easy midday plate.',
    price: 12.99,
    image: '/images/hero-plate.jpg',
    imageAlt: 'Roasted chicken plate in a warm restaurant setting.',
    imagePosition: 'center 38%',
  },
  {
    id: 'stewed-beef',
    category: 'lunch',
    title: 'Stewed Beef',
    description: 'Tender beef with peppers, onions, and potatoes in a savory house stew.',
    price: 14.99,
    image: '/images/soup.jpg',
    imageAlt: 'Stewed beef in a rich broth with a rustic presentation.',
    imagePosition: 'center 36%',
  },
  {
    id: 'spicy-chicken',
    category: 'lunch',
    title: 'Spicy Chicken',
    description: 'Chicken cooked with hot peppers, onions, and a bold, bright house sauce.',
    price: 12.99,
    image: '/images/hero-bowl.jpg',
    imageAlt: 'Spicy chicken bowl served with bright Caribbean color.',
    imagePosition: 'center',
  },
  {
    id: 'bistec-encebollado',
    category: 'classics',
    title: 'Bistec Encebollado',
    description: 'Steak with onions, made for a fuller dinner plate and late-day cravings.',
    price: 19.99,
    image: '/images/hero-plate.jpg',
    imageAlt: 'Steak with onions served as a generous dinner plate.',
    imagePosition: 'center 58%',
  },
  {
    id: 'chicharron-pollo',
    category: 'classics',
    title: 'Chicharrón de Pollo Sin Hueso',
    description: 'Boneless fried chicken, seasoned and crisp with your choice of sides.',
    price: 17.99,
    image: '/images/plantains-rice.jpg',
    imageAlt: 'Boneless fried chicken plate with Caribbean sides.',
    imagePosition: 'center 42%',
  },
  {
    id: 'fried-chicken',
    category: 'classics',
    title: 'Fried Chicken',
    description: 'Classic fried chicken dinner with rice, beans, and salad.',
    price: 15.99,
    image: '/images/hero-plate.jpg',
    imageAlt: 'Fried chicken plate with rice and salad.',
    imagePosition: 'center 35%',
  },
  {
    id: 'pork-shoulder-mofongo',
    category: 'classics',
    title: 'Pork Shoulder Mofongo',
    description: 'Garlic-butter mashed green plantains topped with seasoned pork shoulder.',
    price: 15.99,
    image: '/images/plantains-rice.jpg',
    imageAlt: 'Mofongo topped with pork shoulder and plantains.',
    imagePosition: 'center 55%',
  },
  {
    id: 'shrimp-mofongo',
    category: 'classics',
    title: 'Shrimp Mofongo',
    description: 'Mofongo loaded with shrimp, garlic butter, and extra island flavor.',
    price: 18.99,
    image: '/images/hero-bowl.jpg',
    imageAlt: 'Shrimp mofongo bowl with rich Caribbean seasoning.',
    imagePosition: 'center 44%',
  },
  {
    id: 'shrimp-garlic',
    category: 'classics',
    title: 'Shrimp in Garlic Sauce',
    description: 'Shrimp with garlic butter, cilantro, and a bright dinner-plate finish.',
    price: 19.5,
    image: '/images/soup.jpg',
    imageAlt: 'Shrimp in garlic sauce served in a warm rustic bowl.',
    imagePosition: 'center 46%',
  },
  {
    id: 'sweet-plantains',
    category: 'sides',
    title: 'Sweet Plantains',
    description: 'Golden maduros with a caramelized finish.',
    price: 6,
    image: '/images/plantains-rice.jpg',
    imageAlt: 'Sweet plantains plated beside rice.',
    imagePosition: 'center 65%',
  },
  {
    id: 'tostones',
    category: 'sides',
    title: 'Tostones',
    description: 'Crisp green plantains sliced and fried for the table.',
    price: 6,
    image: '/images/plantains-rice.jpg',
    imageAlt: 'Crisp tostones with a bright Caribbean table setting.',
    imagePosition: 'center 38%',
  },
  {
    id: 'chicken-empanada',
    category: 'sides',
    title: 'Chicken Empanada',
    description: 'Freshly fried and easy to add to lunch, dinner, or a quick snack stop.',
    price: 2.5,
    image: '/images/interior-dining.jpg',
    imageAlt: 'Dining room image representing a quick chicken empanada stop.',
    imagePosition: 'center 42%',
  },
  {
    id: 'green-salad',
    category: 'sides',
    title: 'Green Salad',
    description: 'Lettuce, tomato, onions, cucumber, and avocado.',
    price: 7,
    image: '/images/hero-bowl.jpg',
    imageAlt: 'Fresh salad bowl with bright green ingredients.',
    imagePosition: 'center 34%',
  },
  {
    id: 'white-rice',
    category: 'sides',
    title: 'White Rice',
    description: 'Fluffy white rice, ideal for rounding out any full plate.',
    price: 4.5,
    image: '/images/plantains-rice.jpg',
    imageAlt: 'White rice plated with classic Caribbean sides.',
    imagePosition: 'center 78%',
  },
  {
    id: 'beans',
    category: 'sides',
    title: 'Black or Pinto Beans',
    description: 'Comforting house-style beans with a slow-cooked finish.',
    price: 3,
    image: '/images/soup.jpg',
    imageAlt: 'Beans served in a rustic bowl.',
    imagePosition: 'center 62%',
  },
  {
    id: 'morir-sonando',
    category: 'drinks',
    title: 'Morir Soñando',
    description: 'Classic orange-and-milk refresher with creamy citrus lift.',
    price: 7.5,
    image: '/images/hero-bowl.jpg',
    imageAlt: 'Tropical drink served with a bright citrus mood.',
    imagePosition: 'center 68%',
  },
  {
    id: 'passion-fruit',
    category: 'drinks',
    title: 'Passion Fruit Juice',
    description: 'Fresh tropical juice, cold and bright.',
    price: 5,
    image: '/images/hero-bowl.jpg',
    imageAlt: 'Passion fruit juice in a tropical color palette.',
    imagePosition: 'center 18%',
  },
  {
    id: 'lemon-juice',
    category: 'drinks',
    title: 'Lemon Juice',
    description: 'Fresh-squeezed lemonade-style cooler for hot afternoons.',
    price: 5,
    image: '/images/hero-bowl.jpg',
    imageAlt: 'Cold lemon juice styled in a bright retro setting.',
    imagePosition: 'center 26%',
  },
  {
    id: 'country-club-merengue',
    category: 'drinks',
    title: 'Country Club Merengue',
    description: 'Dominican soda with a nostalgic island pop profile.',
    price: 2.5,
    image: '/images/interior-lounge.jpg',
    imageAlt: 'Retro lounge space evoking a nostalgic soda stop.',
    imagePosition: 'center 38%',
  },
  {
    id: 'malta',
    category: 'drinks',
    title: 'Malta',
    description: 'Classic cold malta soda straight from the cooler.',
    price: 2.5,
    image: '/images/interior-lounge.jpg',
    imageAlt: 'Vintage lounge corner representing a classic cold malta.',
    imagePosition: 'center 62%',
  },
  {
    id: 'water',
    category: 'drinks',
    title: 'Water',
    description: 'Simple bottled water for dine-in or takeout.',
    price: 1.5,
    image: '/images/interior-dining.jpg',
    imageAlt: 'Restaurant dining area representing bottled water service.',
    imagePosition: 'center 58%',
  },
]

const featuredDishIds = ['mangu', 'cuban-sandwich', 'pork-shoulder-mofongo', 'morir-sonando']

const featuredDishes = featuredDishIds
  .map((id) => menuItems.find((item) => item.id === id))
  .filter((item): item is MenuItem => Boolean(item))

const formatPrice = (value: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value)

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="header-inner">
          <a
            className="brand"
            href="#home"
          >
            <span className="brand-mark">LP</span>
            <span className="brand-copy">
              <strong>{restaurant.name}</strong>
              <small>Hasbrouck Heights, New Jersey</small>
            </span>
          </a>

          <nav
            aria-label="Primary navigation"
            className="site-nav"
          >
            {navigation.map((item) => (
              <a
                className="nav-link"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>

        </div>
      </header>

      <main className="site-main">
        <section
          className="hero"
          id="home"
        >
          <article className="panel hero-copy">
            <p className="eyebrow">Cuban Retro Aesthetic</p>
            <h1>Bright Havana energy, home-style plates, and a menu that stays easy to reach.</h1>
            <p className="hero-text">{restaurant.tagline}</p>
            <p className="hero-text">
              The redesign keeps the navigation fixed at the top, uses sharp-edged components
              throughout, and leans into warm reds, sun-faded yellows, and turquoise blues so the
              restaurant feels colorful without losing clarity.
            </p>

            <div className="hero-actions">
              <a
                className="button-link button-primary"
                href="#menu"
              >
                Explore the Menu
              </a>
              <a
                className="button-link button-secondary"
                href="#visit"
              >
                Find the Restaurant
              </a>
              <a
                className="button-link button-call hero-call-cta"
                href={restaurant.phoneHref}
              >
                Call {restaurant.phoneDisplay}
              </a>
            </div>

            
          </article>

          <figure className="panel hero-banner">
            <img
              alt="Signature plate from La Palmita Restaurant 2."
              src="/images/hero-plate.jpg"
            />
            <div className="hero-ribbon">La Palmita</div>
            <figcaption className="hero-caption">
              <strong>Neighborhood comfort, plated with color.</strong>
              <span>Breakfast, lunch, classics, sides, and tropical drinks.</span>
            </figcaption>
          </figure>
        </section>

        <section
          className="about-grid"
          id="about"
        >
          <article className="panel story-panel">
            <p className="eyebrow">About Us</p>
            <h2>The story of La Palmita Restaurant 2 lives in the room as much as the food.</h2>
            <p>
              La Palmita Restaurant 2 is built around the rhythm of a neighborhood restaurant:
              quick breakfasts, generous lunch plates, familiar dinner classics, and the kind of
              hospitality that makes regulars feel recognized the moment they walk in.
            </p>
            <p>
              This version of the site takes that personality and pushes it into a stronger Cuban
              retro visual language. Vintage typography, poster colors, and worn-paper textures sit
              behind the content while the food stays front and center.
            </p>
            <p>
              The result is a sharper, more memorable identity for the same everyday experience:
              large plates, bright flavors, easy directions, and a menu customers can browse from
              their phone, tablet, laptop, or desktop without losing their place.
            </p>
          </article>

          <div className="about-stack">
            
            <article className="panel notes-panel">
              <p className="eyebrow">House Character</p>
              <h3>What defines the space</h3>
              <ul className="notes-list">
                <li>Bold color blocks inspired by retro Havana posters and storefronts.</li>
                <li>Sharp-edged cards, images, and buttons with no rounded corners anywhere.</li>
                <li>Food-first layouts supported by interior photography and aged-paper textures.</li>
              </ul>
            </article>
          </div>
        </section>

        <section
          className="specialties-section"
          id="specialties"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">Menu Preview</p>
              <h2>Start with the dishes customers spot first.</h2>
            </div>
            <p className="section-copy">
              A quick preview up front, then the full organized menu right below.
            </p>
          </div>

          <div className="featured-grid">
            {featuredDishes.map((item) => (
              <article
                className="featured-card"
                key={item.id}
              >
                <img
                  alt={item.imageAlt}
                  loading="lazy"
                  src={item.image}
                  style={{ objectPosition: item.imagePosition ?? 'center' }}
                />
                <div className="featured-content">
                  <div className="item-row">
                    <h3>{item.title}</h3>
                    <span className="price-tag">{formatPrice(item.price)}</span>
                  </div>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="panel menu-intro"
          id="menu"
        >
          <div className="section-heading compact">
            <div>
              <p className="eyebrow">Full Menu</p>
              <h2>Every dish and beverage, organized by category.</h2>
            </div>
            <p className="section-copy">
              Each menu card includes a photo, a clear description, and a visible price.
            </p>
          </div>

          <div className="menu-jump-links">
            {categories.map((category) => (
              <a
                className="jump-link"
                href={`#${category.anchor}`}
                key={category.id}
              >
                {category.label}
              </a>
            ))}
          </div>
        </section>

        <section className="menu-categories">
          {categories.map((category) => {
            const items = menuItems.filter((item) => item.category === category.id)

            return (
              <article
                className="panel menu-category"
                id={category.anchor}
                key={category.id}
              >
                <div className="category-header">
                  <div>
                    <p className="eyebrow">{category.label}</p>
                    <h3>{category.label}</h3>
                  </div>
                  <p>{category.description}</p>
                </div>

                <div className="menu-grid">
                  {items.map((item) => (
                    <article
                      className="menu-card"
                      key={item.id}
                    >
                      <img
                        alt={item.imageAlt}
                        loading="lazy"
                        src={item.image}
                        style={{ objectPosition: item.imagePosition ?? 'center' }}
                      />
                      <div className="menu-card-body">
                        <div className="item-row">
                          <h4>{item.title}</h4>
                          <span className="price-tag">{formatPrice(item.price)}</span>
                        </div>
                        <p>{item.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </article>
            )
          })}
        </section>

        <section
          className="visit-grid"
          id="visit"
        >
          <div className="panel map-panel">
            <iframe
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=La+Palmita+Restaurant+2+438+Boulevard+Hasbrouck+Heights+NJ+07604&output=embed"
              title="Google map showing La Palmita Restaurant 2"
            />
          </div>

          <article className="panel visit-panel">
            <p className="eyebrow">Visit Us</p>
            <h2>Easy to find, easy to call, and built for everyday neighborhood traffic.</h2>
            <p>
              The site keeps directions, operating hours, and direct contact details close to the
              menu so visitors never have to hunt for the next step.
            </p>

            <div className="visit-actions">
              <a
                className="button-link button-primary"
                href={restaurant.mapsUrl}
                rel="noreferrer"
                target="_blank"
              >
                Open in Google Maps
              </a>
              <a
                className="button-link button-secondary"
                href={restaurant.phoneHref}
              >
                Call the Restaurant
              </a>
            </div>

            <dl className="hours-grid">
              {hours.map(([day, range]) => (
                <div key={day}>
                  <dt>{day}</dt>
                  <dd>{range}</dd>
                </div>
              ))}
            </dl>
          </article>
        </section>

        <section
          className="contact-section"
          id="contact"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>All the practical details, kept visible and direct.</h2>
            </div>
          </div>

          <div className="contact-grid">
            <article className="panel contact-card">
              <p className="eyebrow">Phone</p>
              <h3>{restaurant.phoneDisplay}</h3>
              <p>Fastest way to reach the restaurant for questions, availability, or pickup timing.</p>
              <a
                className="text-link"
                href={restaurant.phoneHref}
              >
                Tap to call
              </a>
            </article>

            <article className="panel contact-card">
              <p className="eyebrow">Address</p>
              <h3>438 Boulevard</h3>
              <p>Hasbrouck Heights, New Jersey 07604.</p>
              <a
                className="text-link"
                href={restaurant.mapsUrl}
                rel="noreferrer"
                target="_blank"
              >
                Get directions
              </a>
            </article>

            <article className="panel contact-card">
              <p className="eyebrow">Hours</p>
              <h3>Open Every Day</h3>
              <p>Monday through Saturday from 8:00 AM to 8:00 PM, and Sunday from 9:00 AM to 6:00 PM.</p>
              <a
                className="text-link"
                href="#visit"
              >
                See the full schedule
              </a>
            </article>

            <article className="panel contact-card">
              <p className="eyebrow">Neighborhood</p>
              <h3>Bergen County</h3>
              <p>{restaurant.serviceArea}</p>
              <a
                className="text-link"
                href="#menu"
              >
                Browse the menu
              </a>
            </article>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>
          <strong>{restaurant.name}</strong> | {restaurant.address} | {restaurant.phoneDisplay}
        </p>
        <p>{restaurant.serviceArea}</p>
      </footer>
    </div>
  )
}

export default App
