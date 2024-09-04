const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/js/app.js', 'public/js')
//     .postCss('resources/css/app.css', 'public/css', [
//         //
//     ]);

mix.js([
    'resources/js/oneui.app.min.js',

],
'public/js/common.js')

mix.js([
    'resources/js/core/bootstrap.bundle.min.js',
    'resources/js/core/jquery-scrollLock.min.js',
    'resources/js/core/jquery.appear.min.js',
    'resources/js/core/jquery.min.js',
    'resources/js/core/cookie.min.js',
    'resources/js/core/simplebar.min.js',


    'resources/js/pages/be_comp_calendar.min.js',
    'resources/js/pages/be_comp_charts.min.js',
    'resources/js/pages/be_comp_dialogs.min.js',
    'resources/js/pages/be_comp_image_cropper.min.js',
    'resources/js/pages/be_comp_maps_google.min.js',
    'resources/js/pages/be_comp_maps_vector.min.js',
    'resources/js/pages/be_comp_rating.min.js',
    'resources/js/pages/be_forms_validation.min.js',
    'resources/js/pages/be_forms_wizard.min.js',
    'resources/js/pages/be_pages_dashboard_v1.min.js',
    'resources/js/pages/be_pages_dashboard.min.js',
    'resources/js/pages/be_pages_ecom_dashboard.min.js',
    'resources/js/pages/be_pages_generic_contact.min.js',
    'resources/js/pages/be_tables_datatables.min.js',
    'resources/js/pages/be_ui_animations.min.js',
    'resources/js/pages/be_ui_icons.min.js',
    'resources/js/pages/be_ui_progress.min.js',
    'resources/js/pages/op_auth_lock.min.js',
    'resources/js/pages/op_auth_reminder.min.js',
    'resources/js/pages/op_auth_signin.min.js',
    'resources/js/pages/op_auth_signup.min.js',
    'resources/js/pages/op_coming_soon.min.js',
    'resources/js/plugins/bootstrap-colorpicker/js/bootstrap-colorpicker.js',
    'resources/js/plugins/bootstrap-colorpicker/js/bootstrap-colorpicker.min.js',
    'resources/js/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
    'resources/js/plugins/bootstrap-maxlength/bootstrap-maxlength.js',
    'resources/js/plugins/bootstrap-maxlength/bootstrap-maxlength.min.js',
    'resources/js/plugins/bootstrap-notify/dist/bootstrap-notify.js',
    'resources/js/plugins/bootstrap-notify/dist/bootstrap-notify.min.js',
    'resources/js/plugins/bootstrap-notify/bootstrap-notify.min.js',

    // chart.js
    'resources/js/plugins/chart.js/Chart.bundle.js',
    'resources/js/plugins/chart.js/Chart.bundle.min.js',
    'resources/js/plugins/chart.js/Chart.js',
    'resources/js/plugins/chart.js/Chart.min.js',

// ckeditor/adapters
    'resources/js/plugins/ckeditor/adapters/jquery.js',

// lang
'resources/js/plugins/ckeditor/lang/af.js',
'resources/js/plugins/ckeditor/lang/ar.js',
'resources/js/plugins/ckeditor/lang/az.js',
'resources/js/plugins/ckeditor/lang/bg.js',
'resources/js/plugins/ckeditor/lang/bn.js',
'resources/js/plugins/ckeditor/lang/bs.js',
'resources/js/plugins/ckeditor/lang/ca.js',
'resources/js/plugins/ckeditor/lang/cs.js',
'resources/js/plugins/ckeditor/lang/cy.js',
'resources/js/plugins/ckeditor/lang/da.js',
'resources/js/plugins/ckeditor/lang/de-ch.js',
'resources/js/plugins/ckeditor/lang/de.js',
'resources/js/plugins/ckeditor/lang/el.js',
'resources/js/plugins/ckeditor/lang/en-ca.js',
'resources/js/plugins/ckeditor/lang/en-gb.js',
'resources/js/plugins/ckeditor/lang/en.js',
'resources/js/plugins/ckeditor/lang/es-mx.js',
'resources/js/plugins/ckeditor/lang/es.js',
'resources/js/plugins/ckeditor/lang/et.js',
'resources/js/plugins/ckeditor/lang/eu.js',
'resources/js/plugins/ckeditor/lang/fa.js',
'resources/js/plugins/ckeditor/lang/fi.js',
'resources/js/plugins/ckeditor/lang/fo.js',
'resources/js/plugins/ckeditor/lang/fr-ca.js',
'resources/js/plugins/ckeditor/lang/fr.js',
'resources/js/plugins/ckeditor/lang/gl.js',
'resources/js/plugins/ckeditor/lang/gu.js',
'resources/js/plugins/ckeditor/lang/he.js',
'resources/js/plugins/ckeditor/lang/hi.js',
'resources/js/plugins/ckeditor/lang/hr.js',
'resources/js/plugins/ckeditor/lang/hu.js',
'resources/js/plugins/ckeditor/lang/id.js',
'resources/js/plugins/ckeditor/lang/is.js',
'resources/js/plugins/ckeditor/lang/it.js',
'resources/js/plugins/ckeditor/lang/ja.js',
'resources/js/plugins/ckeditor/lang/ka.js',
'resources/js/plugins/ckeditor/lang/km.js',
'resources/js/plugins/ckeditor/lang/ko.js',
'resources/js/plugins/ckeditor/lang/ku.js',
'resources/js/plugins/ckeditor/lang/lt.js',
'resources/js/plugins/ckeditor/lang/lv.js',
'resources/js/plugins/ckeditor/lang/mk.js',
'resources/js/plugins/ckeditor/lang/mn.js',
'resources/js/plugins/ckeditor/lang/ms.js',
'resources/js/plugins/ckeditor/lang/nb.js',
'resources/js/plugins/ckeditor/lang/nl.js',
'resources/js/plugins/ckeditor/lang/no.js',
'resources/js/plugins/ckeditor/lang/oc.js',
'resources/js/plugins/ckeditor/lang/pl.js',
'resources/js/plugins/ckeditor/lang/pt-br.js',
'resources/js/plugins/ckeditor/lang/pt.js',
'resources/js/plugins/ckeditor/lang/ro.js',
'resources/js/plugins/ckeditor/lang/ru.js',
'resources/js/plugins/ckeditor/lang/si.js',
'resources/js/plugins/ckeditor/lang/sk.js',
'resources/js/plugins/ckeditor/lang/sl.js',
'resources/js/plugins/ckeditor/lang/sr-latn.js',
'resources/js/plugins/ckeditor/lang/sr.js',
'resources/js/plugins/ckeditor/lang/sv.js',
'resources/js/plugins/ckeditor/lang/th.js',
'resources/js/plugins/ckeditor/lang/tr.js',
'resources/js/plugins/ckeditor/lang/tt.js',
'resources/js/plugins/ckeditor/lang/ug.js',
'resources/js/plugins/ckeditor/lang/uk.js',
'resources/js/plugins/ckeditor/lang/vi.js',
'resources/js/plugins/ckeditor/lang/zh-cn.js',
'resources/js/plugins/ckeditor/lang/zh.js',









], 'public/js/common.js')

.sass('resources/sass/app.scss', 'public/css')
.postCss('resources/css/keyframe.css', 'public/css/common.css')
.postCss('resources/css/oneui.css', 'public/css/common.css')
.postCss('resources/css/oneui.min.css', 'public/css/common.css')
.postCss('resources/css/responsive.css', 'public/css/common.css')
.postCss('resources/js/plugins/bootstrap-colorpicker/css/bootstrap-colorpicker.css','public/css/common.css')
.postCss('resources/js/plugins/bootstrap-colorpicker/css/bootstrap-colorpicker.min.css','public/css/common.css')

.postCss('resources/js/plugins/bootstrap-datepicker/css/bootstrap-datepicker.css','public/css/common.css')
.postCss('resources/js/plugins/bootstrap-datepicker/css/bootstrap-datepicker.min.css','public/css/common.css')
.postCss('resources/js/plugins/bootstrap-datepicker/css/bootstrap-datepicker.standalone.css','public/css/common.css')
.postCss('resources/js/plugins/bootstrap-datepicker/css/bootstrap-datepicker.standalone.min.css','public/css/common.css')
.postCss('resources/js/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.css','public/css/common.css')
.postCss('resources/js/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.min.css','public/css/common.css')
.postCss('resources/js/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.standalone.css','public/css/common.css')
.postCss('resources/js/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.standalone.min.css','public/css/common.css')

// chart.js
.postCss('resources/js/plugins/chart.js/Chart.css','public/css/common.css')
.postCss('resources/js/plugins/chart.js/Chart.min.css','public/css/common.css')







.copyDirectory('resources/icon', 'public/icon')
.copyDirectory('resources/img', 'public/img')



.sourceMaps();
