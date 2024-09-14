<?php

namespace App\Http\Service;

use Telegram\Bot\Api;
use Telegram\Bot\Exceptions\TelegramSDKException;
use Telegram\Bot\FileUpload\InputFile;
use Telegram\Bot\Objects\Message;

class TelegramApiService extends Api
{
    /**
     * @param array{
     *     chat_id: int|string,
     *     photo: InputFile|string,
     *     caption: string,
     *     parse_mode: string,
     *     caption_entities: array,
     *     disable_notification: bool,
     *     protect_content: bool,
     *     reply_to_message_id: int,
     *     allow_sending_without_reply: bool,
     *     reply_markup: string
     * } $params
     *
     * @return Message
     * @throws TelegramSDKException
     */
    public function sendPhoto(array $params): Message
    {
        return parent::sendDocument($params);
    }
}
