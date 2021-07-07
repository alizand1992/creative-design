class ContactController < ApplicationController
  def create
    ContactMailer.with(params).contact_email.deliver_now
  end
end
