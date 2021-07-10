<?php
namespace WPVAPP\Includes;

class Frontend {

    public function __construct() {
        add_shortcode( 'wpvapp-app', [ $this, 'render_frontend' ] );
    }

    /**
     * Render Frontend
     * @since 1.0.0
     */
    public function render_frontend( $atts, $content = '' ) {
        wp_enqueue_style( 'wpvapp-frontend' );
        wp_enqueue_script( 'wpvapp-frontend' );

        $content .= '<div id="wpvapp-frontend-app"></div>';

        return $content;
    }

}