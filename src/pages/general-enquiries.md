---
title: General enquiries
sections:
  - title: This is the Hero
    subtitle: The optional subtitle
    align: center
    padding_top: medium
    padding_bottom: medium
    background_color: none
    type: hero_section
  - content: >-
      ### Billing

      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl
      ligula, cursus id molestie vel, maximus aliquet risus. Vivamus in nibh
      fringilla, fringilla.

      ### Privacy

      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl
      ligula, cursus id molestie vel, maximus aliquet risus. Vivamus in nibh
      fringilla, fringilla.
    content_align: left
    form_position: right
    form_width: fifty
    form_layout: inline
    enable_card: true
    form_id: contact-form
    form_action: /thank-you
    form_fields:
      - input_type: text
        name: name
        label: Name
        default_value: Your name
        is_required: true
        type: form_field
      - input_type: email
        name: email
        label: Email
        default_value: Your email address
        is_required: true
        type: form_field
      - input_type: select
        name: subject
        label: Subject
        default_value: Please select
        options:
          - Error on the site
          - Sponsorship
          - Other
        type: form_field
      - input_type: textarea
        name: message
        label: Message
        default_value: Your message
        type: form_field
      - input_type: checkbox
        name: consent
        label: >-
          I understand that this form is storing my submitted information so I
          can be contacted.
        is_required: true
        type: form_field
    submit_label: Send Message
    align_vert: top
    padding_top: medium
    padding_bottom: medium
    background_color: primary
    type: form_section
seo:
  title: General Enquiries
  description: This is the general enquiries page
  extra:
    - name: 'og:type'
      value: website
      keyName: property
      type: stackbit_page_meta_extra
    - name: 'og:title'
      value: General Enquiries
      keyName: property
      type: stackbit_page_meta_extra
    - name: 'og:description'
      value: This is the general enquiries page
      keyName: property
      type: stackbit_page_meta_extra
    - name: 'twitter:card'
      value: summary
      type: stackbit_page_meta_extra
    - name: 'twitter:title'
      value: General Enquiries
      type: stackbit_page_meta_extra
    - name: 'twitter:description'
      value: This is the general enquiries page
      type: stackbit_page_meta_extra
  type: stackbit_page_meta
template: advanced
stackbit_url_path: /general-enquiries
---
