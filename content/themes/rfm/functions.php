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
	wp_enqueue_style( 'google-font-oswald', '//fonts.googleapis.com/css?family=Oswald:300', array(), CHILD_THEME_VERSION );
	wp_enqueue_style( 'google-font-oswald', '//fonts.googleapis.com/css?family=Lora', array(), CHILD_THEME_VERSION );
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

//* Add new image sizes
add_image_size('grid-thumbnail', 100, 100, TRUE);
// add_image_size( 'home-top', 400, 200, TRUE );
