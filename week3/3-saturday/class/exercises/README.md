# HTML/CSS Bootcamp

Adapted from [HTML CSS Bootcamp](https://github.com/adamszaruga/html_css_bootcamp)

## Your task:

There are three folders in this repository: DC_Docs, DC_Blog, and DgtlCrfts. Within each folder is a mockup.jpg file which contains a design for a fictional website. Your task is to implement the design using HTML and CSS. Each design presents a unique set of challenges, but you should be able implement them using the HTML and CSS we've covered in class.

Each folder also contains a /img folder containing images you can use in your implementation.

## DC Blog

This design is the easiest of the three. Pay attention to the colors on the page (background color, text color, button color, etc), and make sure to use the color-picking tool we installed on Saturday. Notice that there are two different fonts on the page.

HTML Tags you might use:
- &lt;img /> for the DigitalCrafts logo
- &lt;button></button> for the follow button
- &lt;a>&lt;/a>, &lt;ul>&lt;/ul>, and &lt;li>&lt;/li> for the toolbars
- &lt;hr /> for the divider line

CSS you might use:
- text-align 
- margin: 0 auto; (for centering content)
- float: left or display: inline-block

BONUS: Try to see if you can get the header to be fixed to the top of the screen.

## DgtlCrfts

This design is slightly more complicated than DC Blog. Notice that the image of the Atlanta skyline is behind the main text (this should be your cue to use the background-image CSS property instead of an img HTML tag.)

HTML Tags you might use:
- &lt;img /> for the DigitalCrafts logo
- &lt;a>&lt;/a>, &lt;ul>&lt;/ul>, and &lt;li>&lt;/li> for the toolbars
- A <div> or <span> with a background image for the down arrow

CSS you might use:
- background-image
- background-position
- background-size
- border-radius (used for rounded corners, but can also make square <div>s into circles)
- margin: 0 auto; (for centering content)
- float: left or display: inline-block
- position: absolute; (for getting those icons right in the middle of the circle)
  
BONUS: Instead of using the three icon images in the /img folder, try to implement the icons using pure HTML and CSS (hint: use border-radius and absolute positioning)

## DC Docs

This design is the hardest of the three. The navigation panel on the left should be fixed to the screen, and only the right side of the page should scroll. You can try to look at http://underscorejs.org/ to see how they implemented this design.

HTML Tags you might use:
- &lt;img /> for the DigitalCrafts logo
- &lt;a>&lt;/a>, &lt;ul>&lt;/ul>, and &lt;li>&lt;/li> for the sidebar navigation
- &lt;input /> for the search bar (you can use an attribute called "placeholder" )
- A &lt;div> or &lt;span> with a background image for the down arrow

CSS you might use:
- float: left; (to stack the sidebar and main content horizontally)
- the :hover selector to make links highlight when you hover over them
- border-left: 5px; (for the left side of the quote box)
- height: 100vw; and width:300px;  combined with position: fixed; for the side bar
