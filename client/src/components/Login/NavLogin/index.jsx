import React from 'react';
import './styles.css'
function NavLogin() {
  return (
    <nav className='nav-menu'>
      <div>
        <svg width="296" height="40" viewBox="0 0 296 71" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M114.527 29L108.688 8.43359H108.512C108.564 8.96745 108.616 9.6901 108.668 10.6016C108.733 11.513 108.792 12.4961 108.844 13.5508C108.896 14.6055 108.922 15.6211 108.922 16.5977V29H102.086V0.445312H112.359L118.316 20.7188H118.473L124.312 0.445312H134.605V29H127.516V16.4805C127.516 15.582 127.529 14.6185 127.555 13.5898C127.594 12.5482 127.633 11.5716 127.672 10.6602C127.724 9.73568 127.77 9.00651 127.809 8.47266H127.633L121.871 29H114.527ZM158.277 29L156.871 23.6484H147.594L146.148 29H137.672L146.988 0.328125H157.281L166.715 29H158.277ZM155.27 17.3203L154.039 12.6328C153.909 12.125 153.72 11.4023 153.473 10.4648C153.225 9.51432 152.978 8.53776 152.73 7.53516C152.496 6.51953 152.314 5.6862 152.184 5.03516C152.066 5.6862 151.897 6.49349 151.676 7.45703C151.467 8.40755 151.246 9.35156 151.012 10.2891C150.79 11.2266 150.595 12.0078 150.426 12.6328L149.195 17.3203H155.27ZM182.418 29H174.703V6.75391H167.73V0.445312H189.371V6.75391H182.418V29ZM217.926 29H210.172V17.3594H201.207V29H193.453V0.445312H201.207V11.0312H210.172V0.445312H217.926V29ZM241.07 29H224.117V0.445312H241.07V6.63672H231.832V11.1289H240.387V17.3203H231.832V22.7109H241.07V29ZM270.348 0.445312V17.6328C270.348 20.0286 269.892 22.112 268.98 23.8828C268.069 25.6406 266.702 27.0013 264.879 27.9648C263.056 28.9154 260.771 29.3906 258.023 29.3906C254.091 29.3906 251.09 28.3815 249.02 26.3633C246.949 24.3451 245.914 21.4935 245.914 17.8086V0.445312H253.668V17.2031C253.668 19.2214 254.046 20.6862 254.801 21.5977C255.556 22.5091 256.669 22.9648 258.141 22.9648C259.195 22.9648 260.055 22.7695 260.719 22.3789C261.383 21.9753 261.865 21.3438 262.164 20.4844C262.477 19.625 262.633 18.5182 262.633 17.1641V0.445312H270.348ZM295.016 20.3281C295.016 21.8776 294.625 23.349 293.844 24.7422C293.062 26.1224 291.845 27.2422 290.191 28.1016C288.551 28.9609 286.428 29.3906 283.824 29.3906C282.522 29.3906 281.376 29.332 280.387 29.2148C279.41 29.0977 278.499 28.9089 277.652 28.6484C276.806 28.375 275.927 28.0234 275.016 27.5938V20.7188C276.565 21.5 278.128 22.099 279.703 22.5156C281.279 22.9193 282.704 23.1211 283.98 23.1211C284.749 23.1211 285.374 23.0299 285.855 22.8477C286.35 22.6654 286.715 22.418 286.949 22.1055C287.184 21.7799 287.301 21.4089 287.301 20.9922C287.301 20.4974 287.125 20.0807 286.773 19.7422C286.435 19.3906 285.888 19.026 285.133 18.6484C284.378 18.2708 283.382 17.8021 282.145 17.2422C281.09 16.7474 280.133 16.2396 279.273 15.7188C278.427 15.1979 277.698 14.6055 277.086 13.9414C276.487 13.2643 276.025 12.4766 275.699 11.5781C275.374 10.6797 275.211 9.61849 275.211 8.39453C275.211 6.55859 275.66 5.02214 276.559 3.78516C277.47 2.53516 278.733 1.59766 280.348 0.972656C281.975 0.347656 283.85 0.0351562 285.973 0.0351562C287.835 0.0351562 289.508 0.24349 290.992 0.660156C292.49 1.07682 293.831 1.55208 295.016 2.08594L292.652 8.04297C291.428 7.48307 290.224 7.04036 289.039 6.71484C287.854 6.3763 286.754 6.20703 285.738 6.20703C285.074 6.20703 284.527 6.29167 284.098 6.46094C283.681 6.61719 283.368 6.83203 283.16 7.10547C282.965 7.37891 282.867 7.69141 282.867 8.04297C282.867 8.48568 283.036 8.88281 283.375 9.23438C283.727 9.58594 284.306 9.97005 285.113 10.3867C285.934 10.7904 287.047 11.3177 288.453 11.9688C289.846 12.5938 291.031 13.2708 292.008 14C292.984 14.7161 293.727 15.582 294.234 16.5977C294.755 17.6003 295.016 18.8438 295.016 20.3281Z" fill="black" />
          <path d="M137.41 56H132.781V42.6523H128.598V38.8672H141.582V42.6523H137.41V56ZM154.203 56H144.031V38.8672H154.203V42.582H148.66V45.2773H153.793V48.9922H148.66V52.2266H154.203V56ZM164.832 42.418C164.285 42.418 163.797 42.5352 163.367 42.7695C162.938 42.9961 162.57 43.3281 162.266 43.7656C161.961 44.2031 161.727 44.7383 161.562 45.3711C161.406 45.9961 161.328 46.707 161.328 47.5039C161.328 48.582 161.465 49.4883 161.738 50.2227C162.012 50.957 162.426 51.5117 162.98 51.8867C163.543 52.2617 164.246 52.4492 165.09 52.4492C165.855 52.4492 166.59 52.3438 167.293 52.1328C168.004 51.9219 168.719 51.668 169.438 51.3711V55.2852C168.68 55.6211 167.902 55.8633 167.105 56.0117C166.316 56.1602 165.477 56.2344 164.586 56.2344C162.727 56.2344 161.203 55.8672 160.016 55.1328C158.836 54.3906 157.965 53.3633 157.402 52.0508C156.848 50.7383 156.57 49.2148 156.57 47.4805C156.57 46.1836 156.75 44.9961 157.109 43.918C157.477 42.8398 158.012 41.9062 158.715 41.1172C159.418 40.3203 160.285 39.707 161.316 39.2773C162.355 38.8398 163.543 38.6211 164.879 38.6211C165.707 38.6211 166.578 38.7188 167.492 38.9141C168.414 39.1016 169.312 39.4062 170.188 39.8281L168.77 43.4727C168.145 43.1758 167.512 42.9258 166.871 42.7227C166.23 42.5195 165.551 42.418 164.832 42.418ZM187.473 56H182.82V49.0156H177.441V56H172.789V38.8672H177.441V45.2188H182.82V38.8672H187.473V56ZM207.5 56H201.43L195.172 43.9297H195.066C195.105 44.2969 195.141 44.7383 195.172 45.2539C195.203 45.7695 195.23 46.2969 195.254 46.8359C195.277 47.3672 195.289 47.8477 195.289 48.2773V56H191.188V38.8672H197.234L203.469 50.7734H203.539C203.516 50.3984 203.492 49.9648 203.469 49.4727C203.445 48.9727 203.422 48.4688 203.398 47.9609C203.383 47.4531 203.375 47.0039 203.375 46.6133V38.8672H207.5V56ZM227.234 47.4102C227.234 48.7305 227.074 49.9336 226.754 51.0195C226.441 52.0977 225.949 53.0273 225.277 53.8086C224.605 54.5898 223.742 55.1914 222.688 55.6133C221.633 56.0273 220.371 56.2344 218.902 56.2344C217.465 56.2344 216.219 56.0273 215.164 55.6133C214.117 55.1914 213.254 54.5938 212.574 53.8203C211.895 53.0391 211.391 52.1055 211.062 51.0195C210.734 49.9336 210.57 48.7227 210.57 47.3867C210.57 45.6055 210.863 44.0586 211.449 42.7461C212.043 41.4258 212.957 40.4062 214.191 39.6875C215.426 38.9609 217.004 38.5977 218.926 38.5977C220.879 38.5977 222.465 38.9609 223.684 39.6875C224.91 40.4141 225.809 41.4375 226.379 42.7578C226.949 44.0781 227.234 45.6289 227.234 47.4102ZM215.445 47.4102C215.445 48.4414 215.562 49.3281 215.797 50.0703C216.031 50.8125 216.402 51.3828 216.91 51.7812C217.418 52.1797 218.082 52.3789 218.902 52.3789C219.754 52.3789 220.43 52.1797 220.93 51.7812C221.438 51.3828 221.801 50.8125 222.02 50.0703C222.246 49.3281 222.359 48.4414 222.359 47.4102C222.359 45.8633 222.102 44.6406 221.586 43.7422C221.07 42.8438 220.184 42.3945 218.926 42.3945C218.09 42.3945 217.414 42.5977 216.898 43.0039C216.391 43.4102 216.02 43.9883 215.785 44.7383C215.559 45.4883 215.445 46.3789 215.445 47.4102ZM230.328 56V38.8672H234.957V52.2617H241.555V56H230.328ZM260.328 47.4102C260.328 48.7305 260.168 49.9336 259.848 51.0195C259.535 52.0977 259.043 53.0273 258.371 53.8086C257.699 54.5898 256.836 55.1914 255.781 55.6133C254.727 56.0273 253.465 56.2344 251.996 56.2344C250.559 56.2344 249.312 56.0273 248.258 55.6133C247.211 55.1914 246.348 54.5938 245.668 53.8203C244.988 53.0391 244.484 52.1055 244.156 51.0195C243.828 49.9336 243.664 48.7227 243.664 47.3867C243.664 45.6055 243.957 44.0586 244.543 42.7461C245.137 41.4258 246.051 40.4062 247.285 39.6875C248.52 38.9609 250.098 38.5977 252.02 38.5977C253.973 38.5977 255.559 38.9609 256.777 39.6875C258.004 40.4141 258.902 41.4375 259.473 42.7578C260.043 44.0781 260.328 45.6289 260.328 47.4102ZM248.539 47.4102C248.539 48.4414 248.656 49.3281 248.891 50.0703C249.125 50.8125 249.496 51.3828 250.004 51.7812C250.512 52.1797 251.176 52.3789 251.996 52.3789C252.848 52.3789 253.523 52.1797 254.023 51.7812C254.531 51.3828 254.895 50.8125 255.113 50.0703C255.34 49.3281 255.453 48.4414 255.453 47.4102C255.453 45.8633 255.195 44.6406 254.68 43.7422C254.164 42.8438 253.277 42.3945 252.02 42.3945C251.184 42.3945 250.508 42.5977 249.992 43.0039C249.484 43.4102 249.113 43.9883 248.879 44.7383C248.652 45.4883 248.539 46.3789 248.539 47.4102ZM270.301 45.9688H277.695V55.2031C276.812 55.5078 275.801 55.7578 274.66 55.9531C273.52 56.1406 272.324 56.2344 271.074 56.2344C269.426 56.2344 267.98 55.9141 266.738 55.2734C265.496 54.6328 264.527 53.6602 263.832 52.3555C263.137 51.043 262.789 49.3867 262.789 47.3867C262.789 45.5898 263.133 44.0391 263.82 42.7344C264.508 41.4219 265.52 40.4102 266.855 39.6992C268.199 38.9805 269.844 38.6211 271.789 38.6211C272.859 38.6211 273.875 38.7227 274.836 38.9258C275.797 39.1289 276.633 39.3867 277.344 39.6992L275.879 43.332C275.262 43.0273 274.621 42.8008 273.957 42.6523C273.293 42.4961 272.578 42.418 271.812 42.418C270.789 42.418 269.965 42.6484 269.34 43.1094C268.723 43.5703 268.273 44.1875 267.992 44.9609C267.711 45.7266 267.57 46.5742 267.57 47.5039C267.57 48.5664 267.719 49.4648 268.016 50.1992C268.32 50.9258 268.762 51.4805 269.34 51.8633C269.926 52.2383 270.633 52.4258 271.461 52.4258C271.734 52.4258 272.066 52.4062 272.457 52.3672C272.855 52.3281 273.156 52.2812 273.359 52.2266V49.543H270.301V45.9688ZM287.305 45.2188L290.258 38.8672H295.273L289.637 49.3086V56H284.973V49.4492L279.336 38.8672H284.375L287.305 45.2188Z" fill="black" />
          <path d="M1 70L5.86076 54.6695H14.2321L32.865 3H46.9072L65 53.25H46.9072L39.8861 32.5254L26.384 70H1Z" fill="black" stroke="black" />
          <path d="M96.4865 54.7288L78.1081 2H60L83.7838 70H110L104.324 54.7288H96.4865Z" fill="black" stroke="black" />
        </svg>
      </div>
      <div className='list'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Support</li>
        </ul>
      </div>

    </nav>
  );
}

export default NavLogin;