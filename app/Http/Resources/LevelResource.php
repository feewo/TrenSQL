<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\Level;
use App\Models\Task;

class LevelResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'lvl' => $this->lvl,
            'score' => $this->score,
            'task' => Task::select('id', 'name')->where('level_id', $this->id)->get(),
        ];
    }
}