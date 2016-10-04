# Simple Movie/Tv Shows application using ReactJs, Redux, webpack

# Installing and Running
To start, make sure you're in the movie_app folder in command-line.

<pre><span class="pl-c"># Install Node Modules</span>
npm install

<span class="pl-c"># Start the Server</span>
npm start
</pre>

<blockquote>
<p>The server will be available at localhost:8080 and the application available in localhost:8080/home</p>
</blockquote>

<h1><a id="user-content-implementation-details" class="anchor" href="#" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Implementation Details</h1>


<h3>Server</h3>

<p>It uses a very simple webpack-dev server. The npm start step will launch the server so you can visit localhost:8080 in the browser to see the guide. Type CTRL+C to stop the server, and remember that only one guide can be ran at any given time since you'll cd to each guide and run its server separately.</p>

<h2><a id="user-content-webpack" class="anchor" href="#webpack" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Webpack</h2>


<p>Webpack is a bundler that allows you to author multiple JavaScript files and have them bundled into one file for sending to the browser. If you're new to Webpack, here's a quick overview...

</p>

<h2><a id="user-content-babel" class="anchor" href="#babel" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Babel</h2>

<p>Babel will tell Webpack how to convert ES6 (and even ES7) code to ES5. You might ask why we would want to write in future versions of JavaScript that aren't even fully supported? Well, there's new JavaScript syntax which is really nice to use. Plus, ES6 was finalized in 2015, which is why it's also called ES2015. So why should we have to wait for all browsers to catch up to a standard that's from 2015?

Many React guides use ES6, so getting familiar with it will also help you learn React. Also note that the a common way to use Babel is to put it's list of desired "presets" in a .babelrc file. This is the strategy that we're using and this file is already created for you.</p>

#State Management
Following concepts used
<h3> react-redux </h3>
<h3> store </h3>
<h3> combined reducers </h3>
<h3> middleware </h3>
<h3> promise </h3>
<h3> logger </h3>


<img src="https://raw.githubusercontent.com/venkateshvangala/reactJs/master/movie_app/src/images/screenshots/CelebDetailPage.png" />
