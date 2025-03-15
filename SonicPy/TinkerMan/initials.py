# Welcome to Sonic Pi
use_bpm 130
live_loop :met do
  sleep 1
end

live_loop :hhc2, sync: :met do
  sleep 0.5
  sample :drum_cymbal_closed, rate: 1.2, start: 0.01, finish: 0.5, amp: 1.25
  sleep 0.5
  
end

live_loop :bass, sync: :met do
  with_fx :panslicer, mix: 0.4 do
    with_fx :reverb, mix: 0.75 do
      use_synth :tech_saws
      use_synth_defaults cutoff: 60, amp: 0.75, attack: 0
      
      play :g3, sustain: 6
      sleep 6
      play :d3, sustain: 2
      sleep 2
      play :e3, sustain: 8
      sleep 8
    end
  end
end