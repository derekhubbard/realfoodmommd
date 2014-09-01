<?php

add_action( 'genesis_before_loop', 'rfm_search_do_search_title' );
function rfm_search_do_search_title() {
	$title = sprintf( '<div class="archive-description"><h1 class="archive-title">%s %s</h1></div>', apply_filters( 'genesis_search_title_text', __( 'Search Results for:', 'genesis' ) ), get_search_query() );
	echo apply_filters( 'genesis_search_title_output', $title ) . "\n";
}

add_filter('post_class', 'rfm_search_post_class');
function rfm_search_post_class($classes) {
  $classes[] = 'entry-tile';
  $classes[] = 'one-third';
  return $classes;
}

remove_action('genesis_entry_content', 'genesis_do_post_image');
add_action('genesis_entry_header', 'rfm_search_do_post_image', 8);
function rfm_search_do_post_image() {
  if (has_post_thumbnail()) {
    the_post_thumbnail('thumbnail-175');
  }
}

// Remove post content, info, metadata
remove_action( 'genesis_entry_header', 'genesis_post_info' );
remove_action( 'genesis_before_post_content', 'genesis_post_info' );
remove_action( 'genesis_entry_content', 'genesis_do_post_content');
remove_action( 'genesis_entry_footer', 'genesis_post_meta' );

genesis();
