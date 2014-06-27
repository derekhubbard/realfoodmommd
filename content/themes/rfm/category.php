<?php

remove_action('genesis_entry_content', 'genesis_do_post_image');
add_action('genesis_entry_header', 'rfm_category_do_post_image', 8);
function rfm_category_do_post_image() {
  the_post_thumbnail('grid-thumbnail');
}

// Remove post content, info, metadata
remove_action( 'genesis_entry_header', 'genesis_post_info' );
remove_action( 'genesis_before_post_content', 'genesis_post_info' );
remove_action( 'genesis_entry_content', 'genesis_do_post_content');
remove_action( 'genesis_entry_footer', 'genesis_post_meta' );

genesis();
