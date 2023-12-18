<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

// добавленные
use App\Models\Task;
use App\Models\levels;

class TaskResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'name' => $this->name,
            'lvl' => $this->level['score'],
            'task' => $this->task,
            'img' => $this->img,
        ];
    }
}