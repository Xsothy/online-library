<?php

namespace App\Http\Service;

use App\Models\Attachment;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Telegram\Bot\Exceptions\TelegramSDKException;
use Telegram\Bot\FileUpload\InputFile;

readonly class UploadFileService
{
    public function __construct(
        private TelegramApiService $telegramApiService,
    )
    {
    }

    /**
     * @param UploadedFile $file
     * @param Model $model
     * @param string $name
     * @param string $userId
     * @return Attachment
     * @throws TelegramSDKException
     */
    public function upload(UploadedFile $file, Model $model, string $name, string $userId): Attachment
    {
        $folderPath = $model->getTable() . '/';
        if (app()->isProduction()) {
            $inputFile = InputFile::create($file,$folderPath . $name.'.'.$file->getClientOriginalExtension());
            $this->telegramApiService->sendPhoto([
                'chat_id' => config('telegram.chat.upload'),
                'photo' => $inputFile
            ]);

            return Attachment::create([
                'name' => $name,
                'path' => $folderPath . $name . '.' . $file->getClientOriginalExtension(),
                'attachment_type' => $model->getMorphClass(),
                'attachment_id' => $model->id,
                'created_by' => $userId,
            ]);
        }

        return Attachment::create([
            'name' => $name,
            'path' =>  $file->storeAs($folderPath, $file->getFilename().'.'.$file->getClientOriginalExtension()),
            'attachment_type' => $model->getMorphClass(),
            'attachment_id' => $model->id,
            'created_by' => $userId,
        ]);
    }
}
