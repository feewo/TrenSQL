<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\Task;
use App\Models\levels;

class TaskFrontResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'name' => $this->name,
            'id' => $this->id
            // 'lvl' =>  $this->level->id,
        ];
    }
}
