export default {
  title: 'Molecules/Comment',
};

export const Comment = () => (
  <article className="rw-comment">
    <div className="rw-comment__header">
      <a className="rw-article-author__container" href="">
        <img className="rw-avatar-sm" src="avatar.jpeg" alt="user avatar" />
        <div className="rw-article-author__content">
          <span>Gerome Grignon</span>
          <span className="rw-date">December 9, 2022</span>
        </div>
      </a>
      <button className="rw-like-counter" aria-describedby="likes">
        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
          <path d="m10 17-1.042-.938q-2.083-1.854-3.437-3.177-1.354-1.323-2.136-2.354Q2.604 9.5 2.302 8.646 2 7.792 2 6.896q0-1.854 1.271-3.125T6.396 2.5q1.021 0 1.979.438.958.437 1.625 1.229.667-.792 1.625-1.229.958-.438 1.979-.438 1.854 0 3.125 1.271T18 6.896q0 .896-.292 1.729-.291.833-1.073 1.854-.781 1.021-2.145 2.365-1.365 1.344-3.49 3.26Zm0-2.021q1.938-1.729 3.188-2.948 1.25-1.219 1.989-2.125.74-.906 1.031-1.614.292-.709.292-1.396 0-1.229-.833-2.063Q14.833 4 13.604 4q-.729 0-1.364.302-.636.302-1.094.844L10.417 6h-.834l-.729-.854q-.458-.542-1.114-.844Q7.083 4 6.396 4q-1.229 0-2.063.833-.833.834-.833 2.063 0 .687.271 1.364.271.678.989 1.573.719.896 1.98 2.125Q8 13.188 10 14.979Zm0-5.5Z" />
        </svg>
        <span>355</span>
      </button>
    </div>

    <p className="rw-comment__body">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu
      pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat
      facilisis.
    </p>
  </article>
);
