<?php
namespace WPVAPP\Includes;

class Admin {

    /**
     * Construct Function
     */
    public function __construct() {
        add_action( 'admin_menu', [ $this, 'admin_menu' ] );
        add_action( 'admin_enqueue_scripts', [ $this, 'register_scripts_styles' ] );
    }

    public function register_scripts_styles() {
        $this->load_scripts();
        $this->load_styles();
    }

    /**
     * Load Scripts
     *
     * @return void
     */
    public function load_scripts() {
        wp_register_script( 'wpvapp-manifest', WPVAPP_PLUGIN_URL . 'assets/js/manifest.js', [], rand(), true );
        wp_register_script( 'wpvapp-vendor', WPVAPP_PLUGIN_URL . 'assets/js/vendor.js', [ 'wpvapp-manifest' ], rand(), true );
        wp_register_script( 'wpvapp-admin', WPVAPP_PLUGIN_URL . 'assets/js/admin.js', [ 'wpvapp-vendor' ], rand(), true );

        wp_enqueue_script( 'wpvapp-manifest' );
        wp_enqueue_script( 'wpvapp-vendor' );
        wp_enqueue_script( 'wpvapp-admin' );

        wp_localize_script( 'wpvapp-admin', 'wpvappAdminLocalizer', [
            'adminUrl'  => admin_url( '/' ),
            'ajaxUrl'   => admin_url( 'admin-ajax.php' ),
            'apiUrl'    => home_url( '/wp-json' ),
        ] );
    }

    public function load_styles() {
        wp_register_style( 'wpvapp-admin', WPVAPP_PLUGIN_URL . 'assets/css/admin.css' );

        wp_enqueue_style( 'wpvapp-admin' );
    }

    /**
     * Register Menu Page
     * @since 1.0.0
     */
    public function admin_menu() {
        global $submenu;

        $capability = 'manage_options';
        $slug       = 'wp-vue-app';

        $hook = add_menu_page(
            __( 'WP Vue App', 'vue-app' ),
            __( 'WP Vue App', 'vue-app' ),
            $capability,
            $slug,
            [ $this, 'menu_page_template' ],
            'dashicons-buddicons-replies'
        );

        if( current_user_can( $capability )  ) {
            $submenu[ $slug ][] = [ __( 'App', 'vue-app' ), $capability, 'admin.php?page=' . $slug . '#/' ];
            $submenu[ $slug ][] = [ __( 'Settings', 'vue-app' ), $capability, 'admin.php?page=' . $slug . '#/settings' ];
        }

        // add_action( 'load-' . $hook, [ $this, 'init_hooks' ] );
    }

    /**
     * Init Hooks for Admin Pages
     * @since 1.0.0
     */
    public function init_hooks() {
        add_action( 'admin_enqueu_scripts', [ $this, 'enqueue_scripts' ] );
    }

    /**
     * Load Necessary Scripts & Styles
     * @since 1.0.0
     */
    public function enqueue_scripts() {
        wp_enqueue_style( 'wpvapp-admin' );
        wp_enqueue_script( 'wpvapp-admin' );
    }

    /**
     * Render Admin Page
     * @since 1.0.0
     */
    public function menu_page_template() {
        echo '<div class="wrap"><div id="wpvapp-admin-app"></div></div>';
    }

}