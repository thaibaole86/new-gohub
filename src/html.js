import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
      <footer>
      <script type="text/javascript" >
var EhAPI = EhAPI || {}; EhAPI.after_load = function(){
EhAPI.set_account('uqu0un6ftrmvh90jvb7kitin9d', 'gohub');
EhAPI.execute('rules');};(function(d,s,f) {
var sc=document.createElement(s);sc.type='text/javascript';
sc.async=true;sc.src=f;var m=document.getElementsByTagName(s)[0];
m.parentNode.insertBefore(sc,m);   
})(document, 'script', '//d2p078bqz5urf7.cloudfront.net/jsapi/ehform.js');
</script> 
      </footer>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
