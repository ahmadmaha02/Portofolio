import React from "react";
import { useFormFields, useMailChimpForm } from "use-mailchimp-form";
import "./Optin.css";

export default function Sub() {
  const url =
    "https://gohusl.us10.list-manage.com/subscribe/post?u=86e45ae901cae310b26ac6a88&amp;id=b04e079e7a";
  // The url looks like the url below:
  // https://aaaaaaaaa.us20.list-manage.com/subscribe/post?u=xxxxxxxxxxxxxxxxxx&amp;id=yyyyyyyyyy
  const { loading, error, success, message, handleSubmit } = useMailChimpForm(
    url
  );
  const { fields, handleFieldChange } = useFormFields({
    EMAIL: ""
  });
  return (
    <div>
      <p>Subscribe to stay updated</p>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit(fields);
        }}
      >
        <input
          id="EMAIL"
          autoFocus
          placeholder="Your Email"
          type="email"
          value={fields.EMAIL}
          required={true}
          onChange={handleFieldChange}
        />
        <div className="optin">
          <button>Keep me updated!</button>
        </div>
      </form>
      {loading && "submitting"}
      {error && message}
      {success && message}
    </div>
  );
}
