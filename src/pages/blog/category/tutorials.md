---
title: Tutorials
sections:
  - title: Tutorials
    subtitle: The optional subtitle
    align: center
    padding_top: medium
    padding_bottom: none
    background_color: none
    type: hero_section
  - blog_feed_cols: three
    enable_cards: true
    show_recent: false
    category:
      id: tutorials
      link: blog/category/tutorials
      title: Tutorials
      type: category
    show_date: true
    show_categories: true
    show_author: true
    show_excerpt: true
    show_image: true
    padding_top: small
    padding_bottom: large
    has_border: true
    type: blog_feed_section
  - title: Inline Form
    title_align: center
    content: Subscribe to our newsletter to make sure you don't miss anything.
    content_align: center
    form_position: bottom
    form_layout: inline
    form_id: subscribeForm
    form_action: /thank-you
    form_fields:
      - input_type: email
        name: email
        label: Email
        default_value: Your email address
        is_required: true
        type: form_field
    submit_label: Subscribe
    padding_top: medium
    padding_bottom: medium
    has_border: true
    background_color: secondary
    type: form_section
seo:
  title: Posts in Tutorials
  description: This is the author archive page
  extra:
    - name: 'og:type'
      value: website
      keyName: property
      type: stackbit_page_meta_extra
    - name: 'og:title'
      value: Posts in Tutorials
      keyName: property
      type: stackbit_page_meta_extra
    - name: 'og:description'
      value: This is the author archive page
      keyName: property
      type: stackbit_page_meta_extra
    - name: 'og:image'
      value: images/classic/post-5.png
      keyName: property
      relativeUrl: true
      type: stackbit_page_meta_extra
    - name: 'twitter:card'
      value: summary_large_image
      type: stackbit_page_meta_extra
    - name: 'twitter:title'
      value: Posts in Tutorials
      type: stackbit_page_meta_extra
    - name: 'twitter:description'
      value: This is the author archive page
      type: stackbit_page_meta_extra
    - name: 'twitter:image'
      value: images/classic/post-5.png
      relativeUrl: true
      type: stackbit_page_meta_extra
  type: stackbit_page_meta
template: advanced
stackbit_url_path: /blog/category/tutorials
---
