<?php
//* Start the engine
include_once( get_template_directory() . '/lib/init.php' );

//* Child theme (do not remove)
define( 'CHILD_THEME_NAME', 'Real Food Mom MD - Genesis' );
define( 'CHILD_THEME_URL', 'http://www.studiopress.com/' );
define( 'CHILD_THEME_VERSION', '2.0.1' );

//* Enqueue Lato Google font
add_action( 'wp_enqueue_scripts', 'genesis_sample_google_fonts' );
function genesis_sample_google_fonts() {
	wp_enqueue_style( 'google-font-lora', '//fonts.googleapis.com/css?family=Lora', array(), CHILD_THEME_VERSION );
	wp_enqueue_style( 'google-font-open-sans-condensed', '//fonts.googleapis.com/css?family=Open+Sans+Condensed:300,400,', array(), CHILD_THEME_VERSION );
}

//* Add HTML5 markup structure
add_theme_support( 'html5' );

//* Add viewport meta tag for mobile browsers
add_theme_support( 'genesis-responsive-viewport' );

//* Add support for custom background
add_theme_support( 'custom-background' );

//* Add support for 3-column footer widgets
add_theme_support( 'genesis-footer-widgets', 3 );

// Post info filtering
add_filter( 'genesis_post_info', 'rfm_post_info_filter' );
function rfm_post_info_filter($post_info) {
if ( !is_page() ) {
	$post_info = '[post_date]';
	return $post_info;
}}

// Post meta filtering
add_filter( 'genesis_post_meta', 'rfm_post_meta_filter' );
function rfm_post_meta_filter($post_meta) {
	$post_meta = '[post_categories] [post_comments]';
	return $post_meta;
}

// Retrieve all posts on recipes category page
add_action('pre_get_posts', 'rfm_pre_get_posts');
function rfm_pre_get_posts($query) {
	if ($query->is_main_query() && $query->is_category('recipes')) {
		$query->set('posts_per_page', -1);
	}
}

// Modify html for all thumbnail images to be links to post permalink
add_filter( 'post_thumbnail_html', 'rfm_post_thumbnail_html', 10, 3 );
function rfm_post_thumbnail_html( $html, $post_id, $post_image_id ) {
  $html = '<a href="' . get_permalink( $post_id ) . '" title="' . esc_attr( get_the_title( $post_id ) ) . '">' . $html . '</a>';
  return $html;
}

// Remove text after comments
add_filter('comment_form_defaults', 'rfm_comment_form_defaults');
function rfm_comment_form_defaults($arg) {
    $arg['comment_notes_after'] = '';
    return $arg;
}

// Modify search text mask
add_filter('genesis_search_text', 'rfm_search_text');
function rfm_search_text() {
	return esc_attr( 'Find something delicious...' );
}

// Modify footer text
remove_action('genesis_footer', 'genesis_do_footer');
add_action('genesis_footer', 'rfm_footer');
function rfm_footer() {
	?>
	<p>&copy; Copyright 2014 <a href="http://realfoodmommd.com/" title="Real Food Mom, MD">Real Food Mom, MD</a>&nbsp;&nbsp;|&nbsp;&nbsp;Powered by <a href="http://wordpress.org/" title="WordPress" target="_blank">WordPress</a> and the wonderfully awesome <a href="http://www.studiopress.com/themes/genesis" title="Genesis Framework" target="_blank">Genesis Framework</a>.&nbsp;&nbsp;|&nbsp;&nbsp;<a href="http://realfoodmommd.com/legal-stuff" title="Legal Stuff">Legal Stuff</a></p>
	<?php
}

//* Add new image sizes
add_image_size('thumbnail-100', 100, 100, TRUE);
add_image_size('thumbnail-150', 150, 150, TRUE);
add_image_size('thumbnail-175', 175, 175, TRUE);
add_image_size('thumbnail-200', 200, 200, TRUE);
add_image_size('thumbnail-grid-post-image', 190, 230, TRUE);
