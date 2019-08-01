// Bring in the necessary functional components
import Navigation from './components/Navigation';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

// Describes the current STATE of our SPA. We say that we pass 'pieces of state.'
const store = {
    'home': {
        'links': {
            'primary': [ 'Home', 'About', 'Contact' ],
            'dropdown': [ 'Project 1', 'Project 2', 'Project 3' ]
        },
        'title': 'This is the home page!',
        'page': `
        <!-- Sections are like subtopics directly related to the general topic of the page. -->
      <section>
        <h2>This Is My Top Section</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis nulla
          temporibus enim, qui quo sed quisquam itaque dolorum laborum nam
          necessitatibus corrupti ratione porro vitae perspiciatis! Pariatur
          reprehenderit aut sed!
        </p>

        <a href="#" class="cta-btn">Read More!</a>
      </section>

      <section>
        <h2>This Is My Top Section</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis nulla
          temporibus enim, qui quo sed quisquam itaque dolorum laborum nam
          necessitatibus corrupti ratione porro vitae perspiciatis! Pariatur
          reprehenderit aut sed!
        </p>

        <a href="#" class="cta-btn">Read More!</a>
      </section>

      <section>
        <h2>This Is My Top Section</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis nulla
          temporibus enim, qui quo sed quisquam itaque dolorum laborum nam
          necessitatibus corrupti ratione porro vitae perspiciatis! Pariatur
          reprehenderit aut sed!
        </p>

        <a href="#" class="cta-btn">Read More!</a>
      </section>`
    },
    'about': {
        'links': {
            'primary': [ 'Home', 'About', 'Contact' ],
            'dropdown': [ 'Project 1', 'Project 2', 'Project 3' ]
        },
        'title': 'About Page',
        'page': `
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse tenetur ullam libero dolorum in nobis quo similique, culpa saepe quod, error aspernatur repellat consequuntur sequi iure ratione? Aut, consectetur aliquid?</p>
        `
    },
    'contact': {
        'links': {
            'primary': [ 'Home', 'About', 'Contact' ],
            'dropdown': [ 'Project 1', 'Project 2', 'Project 3' ]
        },
        'title': 'Contact',
        'page': `
            <form action="form-responses/new" method="POST" netlify>
        <input
          type="text"
          name="firstname"
          placeholder="First Name"
          autofocus
          required
        />
        <input type="text" name="lastname" placeholder="Last Name" />
        <input
          type="email"
          name="userEmail"
          placeholder="your.email@example.com"
        />

        <p>What's this message about?</p>

        <div class="input-group">
          <span>
            <!-- Generally, the 'for' attribute on <label> should match the 'id' of an <input>.
          Radio button 'groups' need to have the same 'name' attribute value so that the server can properly interpret the results. -->
            <input
              type="radio"
              name="subject"
              value="professional"
              id="pro"
              checked
            />
            <label for="pro">I'd like to hire you!</label>
          </span>

          <span>
            <input type="radio" name="subject" value="personal" id="personal" />
            <label for="personal">Personal message</label>
          </span>

          <span>
            <input type="radio" name="subject" value="other" />
            <label>Don't know/something else</label>
          </span>
        </div>

        <div class="input-group">
          <input
            type="checkbox"
            name="optin"
            value="trusting"
            checked
          />Subscribe me to your newsletter!
          <input
            type="checkbox"
            name="optout"
            value="skeptical"
            disabled
          />Cheeky checkbox...
        </div>

        <div class="input-group input-group--flex">
          <label for="marketing">How did you hear about me?</label>
          <select name="marketing" id="marketing">
            <optgroup label="Online">
              <option value="social"
                >Social Media (FB, Twitter, LinkedIn)</option
              >
              <option value="github">Online Portfolio (GitHub)</option>
              <option value="search">Search Engine</option>
              <option value="email">Email</option>
            </optgroup>
            <optgroup label="In-Person">
              <option value="networking">We met at a networking event</option>
              <option value="referral">Personal referral</option>
              <option value="random">We met somewhere else</option>
            </optgroup>
            <option value="other">Other</option>
          </select>
        </div>

        <div class="input-group--flex">
          <textarea name="user_message" rows="8" cols="40"></textarea>
          <div>
            <input type="submit" />
            <input type="reset" value="Reset" />
          </div>
        </div>
      </form>
        `
    }
};

function render(state){
    // We use function invocation that actually runs the fxn. and then `returns` the markup so that it is properly rendered in the browser.
    document.querySelector('#root').innerHTML = `
        ${Navigation(state)}
        ${Header(state)}
        ${Main(state)}
        ${Footer(state)}
    `;

    /**
     * Developer's Note: The 'Navigation' functional component renders 'new' links each and every time. Therefore, on each re-render, we must grab those links and re-attach the event listeners to respond to 'clicks.'
     */

    // The elements will not exist until page is rendered!
    const navItems = document.querySelectorAll('nav > ul > li:not(.dropdown)');

    navItems.forEach(function eventListenerAdder(navItem){
        navItem.addEventListener('click', function clickHandler(event){
            event.preventDefault();

            // Recursive fxn. call
            render(store[event.target.textContent.toLowerCase()]);
        });
    });
}

// To render a page, we pass in a piece of state.
render(store.home);