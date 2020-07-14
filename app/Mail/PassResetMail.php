<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class PassResetMail extends Mailable
{
    use Queueable, SerializesModels;

    public $mailBody;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($mailBody)
    {
        $this->mailBody = $mailBody;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('Reset Your Password')->view('resetPassword.emailTemp');
    }
}
