<?php

add_filter('post_class', 'rfm_category_post_class');
function rfm_category_post_class($classes) {
  $classes[] = 'entry-tile';
  return $classes;
}

remove_action('genesis_entry_content', 'genesis_do_post_image');
add_action('genesis_entry_header', 'rfm_category_do_post_image', 8);
function rfm_category_do_post_image() {
  if (has_post_thumbnail()) {
    the_post_thumbnail('thumbnail-175');
  }
}

// Remove post content, info, metadata
remove_action( 'genesis_entry_header', 'genesis_post_info' );
remove_action( 'genesis_before_post_content', 'genesis_post_info' );
remove_action( 'genesis_entry_content', 'genesis_do_post_content');
remove_action( 'genesis_entry_footer', 'genesis_post_meta' );

// remove_action( 'genesis_after_endwhile', 'genesis_posts_nav' );

genesis();
